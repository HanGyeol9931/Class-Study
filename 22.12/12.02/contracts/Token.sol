// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// 컨트랙트 파일 전체 코드 가져오기
import "./ERC20.sol";

// 컨트랙트 상속 is로 GYEOLToken에 ERC20을 상속
contract GYEOLToken is ERC20 { 
    address public owner; // 이 컨트랙트의 배포자가 할당될 상태 변수
    uint256 public ethCanBuy = 200; // 1 ETH 당 200토큰을 정해줄 상태 변수

    constructor(string memory _name, string memory _symbol, uint _amount){
        // ERC20 상속 받아서 있는것
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
        // mint 함수 만들 예정
        mint(_amount * (10 ** uint256(decimals)));
    }

    // 익명 함수
    // receive : 특정 계정에서 CA에 이더를 전송했을때 실행 되는 함수
    // external이 있다는건 이 컨트랙트 자체에서 실행 하지 않는다는것.
    // 선언 해둠
    // payable를 선언 해주어야 이더를 보낼수 있다.
    receive() external payable {
        // require true면 실행하고 false면 종료
        // require true면 실행
        require(msg.value != 0);
        uint amount = msg.value * ethCanBuy;

        require(balances[owner] >= amount) ; 
        balances[owner] -= amount;
        balances[msg.sender] += amount;

        // 발행자가 CA 전송한거면 발행량 늘려주는것
        if(msg.sender == owner){
            mint(amount);
        }

        emit Transfer(owner, msg.sender, amount);
    }
}
