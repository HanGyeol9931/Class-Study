// 전에 만든 ERC20 토큰 편하게 만들어 보기
// 메타마스크에서 goerliETH 테스트넷을 쓰기위해 미리 모아놓기

// 오픈 제플린을 사용해서 토큰의 표준 인터페이스를 가져와서  사용할 수 있다.
// ERC20을 직접 만들어봤는데 직접만들어서 사용하는게 아니고
// 설치 받아서 편하게 사용해보자.
// 표준 규격이 있다고 했는데 그렇기 때문에 이미 만들어 놓은거 가져다가 사용하면 된다.

// 오픈 제플린 설치
// npm install openzeppelin-solidity

// node_modules 안에 파일이 생긴다.
// 그중 contracts에 token ERC20 에 들어가면 이미 만들어 놓은게 있다.

// 트러플 초기화
// npx truffle init

// truffle-config.js 파일 수정하고
// contracts 폴더에 SeokToken.sol 만들고 EthSwap.sol 만들기

// migrations 폴더에 2_deploy_EthSwap.js 만들고 작성

// 배포 진행
// npx truffle migration
