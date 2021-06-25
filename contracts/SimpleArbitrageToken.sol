pragma solidity =0.6.6;

import "./PancakeLibrary.sol";
import "./interfaces/IPancakeRouter02.sol";
import "./interfaces/IPancakePair.sol";
import "./interfaces/IERC20.sol";
import "./interfaces/IWETH.sol";

contract SimpleArbitrage {
    address myAddress;

    address factory;
    IPancakeRouter02 router;
    IPancakeRouter02 routerF;
    IWETH WETH;

    uint256 deadline;

    event addr(address addr);
    event amount(uint256 amount);

    constructor() public {}

    receive() external payable {}

    function startArbitrage(
        address _myAddress,
        address _factoryF,
        address _routerF,
        uint256 _deadline,
        address _router,
        address _token,
        uint256 _wbnbAmount
    ) external {
        deadline = _deadline;
        myAddress = _myAddress;
        factory = _factoryF;

        router = IPancakeRouter02(_router);
        routerF = IPancakeRouter02(_routerF);

        WETH = IWETH(router.WETH());

        address pair = PancakeLibrary.pairFor(factory, address(WETH), _token);

        address token0 = IPancakePair(pair).token0();

        uint256 amount0 = token0 == address(WETH) ? _wbnbAmount : 0;
        uint256 amount1 = token0 == address(WETH) ? 0 : _wbnbAmount;

        IPancakePair(pair).swap(amount0, amount1, address(this), "go");
    }

    function pancakeCall(
        address sender,
        uint256 amount0,
        uint256 amount1,
        bytes calldata data
    ) external payable {
        address[] memory path = new address[](2);
        address[] memory pathGetAmountsIn = new address[](2);

        uint256 wbnbAmount;
        address token0;
        address token1;

        {
            token0 = IPancakePair(msg.sender).token0();
            token1 = IPancakePair(msg.sender).token1();

            assert(
                msg.sender == PancakeLibrary.pairFor(factory, token0, token1)
            );
            assert(amount0 == 0 || amount1 == 0);

            path[0] = amount0 == 0 ? token1 : token0;
            path[1] = amount0 == 0 ? token0 : token1;

            pathGetAmountsIn[0] = amount0 == 0 ? token0 : token1;
            pathGetAmountsIn[1] = amount0 == 0 ? token1 : token0;

            wbnbAmount = token0 == address(WETH) ? amount0 : amount1;
        }

        IERC20 tokenAdd = IERC20(path[0] == address(WETH) ? path[1] : path[0]);

        WETH.withdraw(wbnbAmount);

        uint256 amountRequired = routerF.getAmountsIn(
            wbnbAmount,
            pathGetAmountsIn
        )[0];

        emit amount(amountRequired);

        uint256 amountRequired1 = routerF.getAmountsOut(wbnbAmount, path)[1];
        emit amount(amountRequired1);

        uint256 amountReceived = router.swapExactETHForTokens{
            value: wbnbAmount
        }(
            amountRequired,
            path,
            address(this), //msg.sender,
            deadline
        )[1];
        emit amount(amountReceived);
        emit amount(amountReceived - amountRequired);

        assert(amountReceived > amountRequired);
        tokenAdd.transfer(msg.sender, amountRequired);
        tokenAdd.transfer(myAddress, amountReceived - amountRequired);
    }
}
