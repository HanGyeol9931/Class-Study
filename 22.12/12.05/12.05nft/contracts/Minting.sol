// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import 'openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol';

contract Minting is ERC721{
    // ERC721(_name,_symbol) 부분이 super와 비슷한 부분
    constructor(string memory _name, string memory _symbol) ERC721(_name,_symbol){
    }

    function _minting(uint _tokenId) public {
        // _tokenId : 토큰의 고유값,  - 키값 : 조회하면 누가 토큰의 소유자인지 
        // msg.sender : 토큰을 받는 계정
        _mint(msg.sender,_tokenId);
    }

    function tokenURI(uint) public override pure returns (string memory){
        // Pinata 페이지에서 만든 객체주소
        return "https://gateway.pinata.cloud/ipfs/QmR4DA11bpyn8bcgQWYtobE1JMmyPSD3G7HNDuMCTJRReg";
        // 반환값은 우리가 만들어서 넣어줄 json객체
        // pure는 state값을 변경 할수 없다.
        // 이 함수 밖에 있는 값을 읽어올수도 없고 변경도 불가능

        // nft 객체의 내용
        // {
        //     "name" : "이름",
        //     "description" : "설명",
        //     "image" : "이미지의 경로",
        //     "attributes" : ["속성 값"]
        // }
        
    }
}
// 