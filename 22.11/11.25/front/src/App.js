import useWeb3 from "./hooks/useWeb3";
import "./App.css";
import Counter from "./componenets/Counter";

function App() {
  const [web3, account] = useWeb3();


  if (!account) return <h1>메타마스크 연결 해주세요</h1>;
  return (
    <div className="App">
      <h2>계정 : {account}</h2>
      <Counter web3={web3} account={account}/>
    </div>
  );
}

export default App;

// 프론트 리액트로 구성하고 메타마스크 연결은 가나쉬 네트워크에 연결하고
// 스마트 컨트랙트 배포는 트러플로 구성할 예정

// npx ganache-cli

// 리액트에서 프론트로 스마트 컨트랙트로 동작을 시켜서 카운터를 제작
// 더하고 뺴고 카운트를 만들고 클라이언트에서 메타마스크로 연결된 계정을
// 통해 트랜잭션을 보내고 스마트 컨트랙트 코드를 실행해서 상태 변수가 바뀌는걸
// 프론트에서 확인

// contracts폴더에 Counter.sol파일 만들어서 내용 추가
// truffle-config.js 내용 수정 가나쉬 네트워크 속성추가
// npx truffle compile 컨트랙트 코드 컴파일

// 배포를 하기 위해 migrations 폴더에 [번호][내용][이름].js 파일을 만들어서
// 배포에 대한 코드 작성

// 배포 명령어 사용해서 가나쉬 네트워크에 컨트랙트 배포 진행
// npm truffle migration

// 배포 잘 되었는지 확인 트러플 콘솔 열어서
// npx truffle console

// 트러플 콘솔창에 (Counter.deployed().then(instance => it = instance))
// it.address 콘솔에 확인
// CA : "0xBFEF4396074c97f22E058eb7593E8da3f3D52554"

// it.current.call()를 작성하면 BN으로 나오는데 Big Number의 약자로
// 자바스크립트에 큰숫자를 표현할떄 사용되는 객체 컨트랙트에서
// 사용하는 int는 기본적으로 그값이 큰 경우가 많아서 1ETH라 하면
// 10^18 wei를 의미하기 때문에 BN으로 가져오는 경우가 많다.

// it.increment() 함수를 사용해서 즉시 상태가 변한 값을 확인.
// 이유는 가나쉬로 실행한 로컬의 이더리움 네트워크는 트랜잭션이 발생하면
// 자동으로 블록 마이닝을 시도 해주기 떄문에

// front 작업
