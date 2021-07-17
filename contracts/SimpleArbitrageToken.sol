pragma solidity =0.6.6;

import "./PancakeLibrary.sol";
import "./interfaces/IPancakeRouter02.sol";
import "./interfaces/IPancakePair.sol";
import "./interfaces/IERC20.sol";
import "./interfaces/IWETH.sol";

contract SimpleArbitrageToken {
    address myAddress;
    uint256 mult;
    uint256 divd;

    address factory;
    IPancakeRouter02 router;
    IPancakeRouter02 routerF;

    uint256 deadline;

    event amount(uint256 amount);

    constructor() public {}

    receive() external payable {}

    function startArbitrageToken(
        address _myAddress,
        address _factoryF,
        address _routerF,
        uint256 _deadline,
        address _router,
        address _token0,
        address _token1,
        uint256 _amount0,
        uint256 _amount1,
        uint256 _mult,
        uint256 _divd
    ) external {
        deadline = _deadline;
        myAddress = _myAddress;
        factory = _factoryF;

        mult = _mult;
        divd = _divd;

        router = IPancakeRouter02(_router);
        routerF = IPancakeRouter02(_routerF);

        address pair = PancakeLibrary.pairFor(factory, _token0, _token1);

        IPancakePair(pair).swap(_amount0, _amount1, address(this), "go");
    }

    function pancakeCall(
        address sender,
        uint256 amount0,
        uint256 amount1,
        bytes calldata data
    ) external payable {
        address[] memory path = new address[](2);
        address[] memory pathGetAmountsIn = new address[](2);

        uint256 tokenAmount;
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

            tokenAmount = amount0 == 0 ? amount1 : amount0;
        }

        IERC20 tokenAdd0 = IERC20(path[0]);
        IERC20 tokenAdd1 = IERC20(path[1]);

        tokenAdd0.approve(address(router), tokenAmount);
        tokenAdd1.approve(address(router), tokenAmount);

        uint256 amountRequired = routerF.getAmountsIn(
            tokenAmount,
            pathGetAmountsIn
        )[0];

        uint256 amountRequiredSlippaged = ((amountRequired * mult) / divd) +
            amountRequired;

        emit amount(amountRequired);
        emit amount(amountRequiredSlippaged);

        uint256 amountReceived = router.swapExactTokensForTokens(
            tokenAmount,
            amountRequiredSlippaged,
            path,
            address(this),
            deadline
        )[1];
        emit amount(amountReceived);
        emit amount(amountReceived - amountRequired);

        assert(amountReceived > amountRequired);

        if (amount0 == 0) {
            tokenAdd1.transfer(msg.sender, amountRequired);
            tokenAdd1.transfer(myAddress, amountReceived - amountRequired);
        } else {
            tokenAdd0.transfer(msg.sender, amountRequired);
            tokenAdd0.transfer(myAddress, amountReceived - amountRequired);
        }
    }
}
