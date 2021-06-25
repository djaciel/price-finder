pragma solidity =0.6.6;

import "./PancakeLibrary.sol";
import "./interfaces/IPancakeRouter01.sol";
import "./interfaces/IPancakeRouter02.sol";
import "./interfaces/IPancakePair.sol";
import "./interfaces/IPancakeFactory.sol";
import "./interfaces/IERC20.sol";
import "./interfaces/IPancakeCallee.sol";

contract SimpleSwap {
    address myAddress = 0x97c14E4e7ECEc5106b315ed4c7cA1983AfFc11b3;

    address factory;
    address routerAdd;
    IPancakeRouter02 router;

    uint256 deadline;

    event addr(address addr);
    event amount(uint256 amount);

    constructor() public {
        //factory = 0x6725F303b657a9451d8BA641348b6761A6CC7a17; //pancakeswap factory
        //routerAdd = 0xD99D1c33F9fC3444f8101754aBC46c52416550D1; //pancakeswap router

        factory = 0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc; //pancakeswap2 (bsc.kiemtienonline360.com) factory -- NO JALA EL FACTORY!
        routerAdd = 0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3; //pancakeswap2 router

        //factory = 0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7; //bakeryswap2 factory -- NO JALA EL FACTORY!
        //routerAdd = 0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F; //bakeryswap2 router

        //factory = 0xaC653cE27E04C6ac565FD87F18128aD33ca03Ba2; //hyperswap factory -- NO JALA EL FACTORY!
        //routerAdd = 0x3bc677674df90A9e5D741f28f6CA303357D0E4Ec; //hyperswap router

        router = IPancakeRouter02(routerAdd);
    }

    function getBalanceToken(address _token) public view returns (uint256) {
        if (_token == router.WETH()) {
            return address(this).balance;
        } else {
            return IERC20(_token).balanceOf(address(this));
        }
    }

    function simpleSwap(
        address _token,
        uint256 _wbnbAmount,
        uint256 _deadline
    ) external payable {
        address[] memory path = new address[](2);
        path[0] = router.WETH();
        path[1] = _token;

        uint256 amountRequired = router.getAmountsIn(_wbnbAmount, path)[0];

        emit amount(amountRequired);

        uint256[] memory amountsReceived = router.swapExactETHForTokens{
            value: _wbnbAmount
        }(
            amountRequired,
            path,
            address(this), //msg.sender,
            _deadline
        );

        emit amount(amountsReceived[0]);
        emit amount(amountsReceived[1]);

        IERC20(_token).transfer(myAddress, amountsReceived[1]);
        payable(myAddress).transfer(address(this).balance);
    }

    receive() external payable {}
}
