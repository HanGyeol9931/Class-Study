// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import하는데 nodemodules/openzeppelin/contracts/token/ERC20 을 가져오주자
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract SeokToken is ERC20{
    string public _name = "Seok";
    string public _symbol = "STK";
    uint public _totalSupply = 10000 * (10 ** decimals());
    // 클래스로 따지면 super()를 사용한것과 같음
    // contructor()함수 옆에 붙여서
    constructor() ERC20(_name,_symbol){
        // 배포한 사람에게 총 발행량 주고
        _mint(msg.sender, _totalSupply);
    }
}