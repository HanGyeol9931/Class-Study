// 트러플을 사용해서 이더리움 디앱 개발을 쉽게 할수 있다.
// 트러플이 Dapp 개발을 하는데 도와주는 블록체인 프레임 워크
// 블록체인에서 스마트 계약을 컴파일하고 배포할때 복잡한 구조를 추상화 시켜주는 역할

// 트러플은 스마트 컨트랙트를 쉽게 배포할수 있게 도와준다.
// 트러플에서는 web3라이브러리를 사용한다.

// package.json 만들고
// npm init -y

// solc설치
// npm i solc

// 트러플 설치
// npm i truffle

// 트러블 버전 확인
// npx truffle version

// 트러플 초기화 설치
// npx truffle init
// 초기화를하면 폴더들이 생긴다.
// .gitkeep : git 사용자가 만든 빈파일
// 빈 폴더를 유지한다. 빈폴더를 커밋 할수 있게 넣어논것.

// 폴더들
// contracts : 스마트 컨트랙트 코드를 작성 하는 폴더
// migrations : 배포 관련 코드를 컨트랙트별로 모으는 폴더
// test : 스마트 컨트랙트 테스트 코드 작성하는 폴더
// truffle-config.js : 트러플 환경 설정 파일 컴파일 하는 파일, 솔리디티 버전도 여기에 명시
// build : 컨트랙트코드 컴파일하면 생긴다. 솔리디티 코드를 컴파일한 내용을 가지고 있는 json 파일

// 스마트 컨트랙트 코드 컴파일 명령어
// npx truffle compile
// 컴파일 문제가 생긴다면 truffle config.js 에 있는 버전과 sol파일 버전 확인해주기

// 컴파일된 파일로 스마트 컨트랙트 배포를 해주자
// 어떤 네트워크에 배포를 하는지 설정을 해줘야 하는데
// 설정 파일 truffle-config.js를 수정해서 네트워크 설정을 해주면 된다.

// geth 네트워크를 실행 시켜주고
// truffle config.js  네트워크 객체 설정
// migrations 폴더에 배포 관련 코드를 작성한 파일을 만들어 주기
// 배포관련 코드를 작성하는 파일의 이름 양식
// [번호][내용][컨트랙트 이름].js

// 배포 명령어
// npx truffle migration

// 배포한 컨트랙트 확인
// 트러플 콘솔창을 사용해서 명령어로 확인

// 트러플 콘솔창 실행 명령어
// npx truffle console

// 배포한 컨트랙트 CA 확인
// HelloWorld.address

// 배포된 스마트 컨트랙트 콘솔창에서 실행
// HelloWorld.deployed().then(instance => hello = instance)
// hello 라는 변수에 instance를 담아준다.

// CA 확인 : hello.address
// hello.value.call() : 배포된 상태변수를 가져온다.

// setValue 함수를 호출 후 실행해서 트랜잭션을 발생 시키고
// txpool 에 담겨있는 트랜잭션을 처리해서 확인

// hello.setValue('dfiajdf');
