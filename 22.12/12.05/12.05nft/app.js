// ERC20 토큰을 사용해봤고 NFT를 발행할때는
// ERC721 토큰을 사용해서 민팅 한다.

// ERC20토큰은 그냥 갯수가 있는 토큰이라 보면 되고
// "계정" : 200
// {
//     "0xasd09vz89as8df9" : 200
// }

// ERC721 토큰은 대체 불가 토큰
// 고유값 : "계정"
// {
//     "54j13kl(tokenId)" : "0x1yb159abv6sr09"
// }

// ERC721 토큰
// 토큰에 고유 값이 있고 그 토큰의 주인이 누구인지

// Remix
// 스마트 컨트랙트를 쉽게 작성하고 배포를 하게 도와주는 툴

// 트러플 초기화
// npx truffle init

// @remix-project/remixd 설치
// npm install -g @remix-project/remixd

// 터미널에 경로부터 remix에 연결됨
// contracts 폴더로 이동을 해서
// remixd -s . --remix-ide https://remix.ethereum.org

// https://remix.ethereum.org/
// 사이트에서 로컬호스트에 연결하면 폴더가 동기화 된다.

// 오픈 제플린 설치
// ERC721 토큰 표준 사용하기 위해서
// npm install openzeppelin-solidity
