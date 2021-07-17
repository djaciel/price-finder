pragma solidity =0.6.6;

import "./PancakeLibrary.sol";
import "./interfaces/IPancakeRouter02.sol";
import "./interfaces/IPancakePair.sol";
import "./interfaces/IERC20.sol";
import "./interfaces/IWETH.sol";
import "./interfaces/IPancakeFactory.sol";

contract SimplePancakeArbitrage {
    address myAddress = 0xACdDed94B986697cA1a802Eb1c83a8c63e3b67E8;

    IPancakeRouter02 pancakeRouter =
        IPancakeRouter02(0x10ED43C718714eb63d5aA57B78B54704E256024E);
    address pancakeFactory = 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73;

    IPancakeRouter02 apeRouter =
        IPancakeRouter02(0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7);
    address apeFactory = 0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6;

    address tokenA;
    address tokenB;
    address tokenC;

    address[] pathAC;
    address[] pathCB;

    uint256 deadline;

    event amount(uint256 amount);
    event addr(address addr);

    constructor() public {}

    receive() external payable {}

    function startArbitrageToken(
        address _token0,
        address _token1,
        address _token2,
        uint256 _amount,
        uint256 _deadline,
        address[] memory _pathAC,
        address[] memory _pathCB
    ) public {
        deadline = _deadline;

        tokenA = _token0;
        tokenB = _token1;
        tokenC = _token2;

        pathAC = _pathAC;
        pathCB = _pathCB;

        address pair = IPancakeFactory(pancakeFactory).getPair(tokenA, tokenB);

        address pairToken0 = IPancakePair(pair).token0();

        uint256 amount0 = pairToken0 == _token0 ? _amount : 0;
        uint256 amount1 = pairToken0 == _token1 ? _amount : 0;

        IPancakePair(pair).swap(amount0, amount1, address(this), "go");
    }

    function pancakeCall(
        address sender,
        uint256 amount0,
        uint256 amount1,
        bytes calldata data
    ) external payable {
        //------------------------------------------------------------------------------------------------
        //Aqui hare el trade de token A por token C utilizando ApeSwap (exchange B)

        uint256 loanAmount = amount0 == 0 ? amount1 : amount0;

        IERC20(tokenA).approve(address(apeRouter), loanAmount);

        apeRouter.swapExactTokensForTokensSupportingFeeOnTransferTokens(
            loanAmount,
            0,
            pathAC,
            address(this),
            deadline
        );

        uint256 amountReceivedTokenC = IERC20(tokenC).balanceOf(address(this));

        emit amount(amountReceivedTokenC);

        //------------------------------------------------------------------------------------------------
        //Aqui hare el trade de token C por Token B utilizando PancakeSwap (exchange A)

        address[] memory pathGetAmountsInAB = new address[](2);

        pathGetAmountsInAB[0] = tokenB;
        pathGetAmountsInAB[1] = tokenA;

        IERC20(tokenC).approve(address(pancakeRouter), amountReceivedTokenC);

        uint256 amountRequiredTokenB = pancakeRouter.getAmountsIn(
            loanAmount,
            pathGetAmountsInAB
        )[0];

        pancakeRouter.swapExactTokensForTokensSupportingFeeOnTransferTokens(
            amountReceivedTokenC,
            amountRequiredTokenB,
            pathCB,
            address(this),
            deadline
        );

        uint256 amountReceivedTokenB = IERC20(tokenB).balanceOf(address(this));

        //------------------------------------------------------------------------------------------------
        //Aqui si se regresa lo prestado a PancakeSwap

        IERC20(tokenB).transfer(msg.sender, amountRequiredTokenB);
        IERC20(tokenB).transfer(myAddress, amountReceivedTokenB);
    }
}
