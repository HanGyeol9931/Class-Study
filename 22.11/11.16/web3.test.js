
const Web3 = require("web3");
const ethTx = require("ethereumjs-tx").Transaction

describe("web3 test",()=>{
    let web3;
    let accounts; //가니쉬에 있는 주소 받아올꺼
    let sender; // 보내는사람
    let received; // 받는사람

    it("web3 연결",()=>{
    // http://127.0.0.1:8545 경로의 가나쉬에서 실행됙 있는 이더리움 클라이언트로
        // web3 인스턴스 생성
        web3 = new Web3(new Web3.providers. HttpProvider('http://127.0.0.1:8545'));
    })
    // 단위 변경
    // web3.utils.toWei() wei 단위 변경 함수
    it("ETH 단위 변경",()=>{
        console.log(web3.utils.toWei("1","gwei"));// Gwei 단위를 wei단위로 변환
        console.log(web3.utils.toWei("1","ether"));// ether 단위를 wei단위로 변환
    })
    // 최신 블록의 높이
    // web3.eth.getBlockNumber 최신 블록 높이 가져오는 함수
    it("최신 블록 높이",async()=>{
        const latestBlock = await web3.eth.getBlockNumber();
        console.log(latestBlock);
    })

    // 전체 account 가져오기
    // web3.eth.getAccounts() 계정들 가져오는 함수
    it("전체주소",async()=>{
        accounts =await web3.eth.getAccounts()
        console.log(accounts);
    })

    // 잔액 조회
    // web3.eth.getBalance(계정) 계정 잔액 조회 함수
    it("계정 잔액 조회", async()=>{
        const balance = await web3.eth.getBalance(accounts[0]);
        console.log("내 잔액 : ",balance); // 웨이라는 단위를 Ether로 표현 한것
        // 웨이(wei)는 이더리움의 가장 작은 단위
        // 1이더는 10^18과 같다

        // 이더리움 단위
        // wei : 1
        // GWEI : 10 ** 9 wei
        // Ether : 10 ** 18 wei
        // Gas
        // 송금과 계약을 할때 수수료로 Ether지불 해야한다.
        // 수수료를 지불할떄 Ether의 사용을 한다.
    })

    // 트랜잭션 횟수 조회
    it("트랜잭션 횟수 조회",async()=>{
        const txCount = await web3.eth.getTransactionCount(accounts[1])
        console.log(txCount);
    })
    // 트랜잭션 실행 하기
    // 트랜젹션의 내용
    // nonce : 보내는 계정이 발생시킨 총 트랜잭션 횟수
    // from : 보내는 사람
    // to : 받는 사람
    // value : 보내는 금액(wei)
    // gasLimit : 해당 트랜잭션이 사용할수 있는 가스의 최대
    // gasPrice : 보내는 사람이 지불하는 가스 가격
    // data : 스마트 컨트랙트와 관련된 데이터

    // web3.eth.sendSignedTransaction 트랜잭션 전송함수
    // web3.eth.getTransactionCount 계정의 트랜잭션 횟수 조회 함수
    // web3.utils.toHex Hex 단위로 변환

    // gas 가스는 이더리움 네트워크에서 트랜잭션을 보낼때 필요한 수수료
    // EVM 이더리움 네트워크 가상 머신에서 트랜잭션을 보내면 소모되는 비용
    // 보내는 비용을 가스비 라고 부르고 가스비의 단위는 gwei단위로 측정

    // 가스비 한도는 트랜잭션을 보내는 쪽에서 
    // 트랜잭션의 최대 가스량을 의미
    // 가스비는 지불하는 가스 당의 가격이다.
    // 트랜잭션에서 과도한 연산이 들어가는 경우 소모되는 가스 양이 가스비 한도를 넘어서면
    // 트랜재션이 중단 된다.
    
    it("트랜잭션 실행",async()=>{
        // 보내는 사람의 트랜잭션 횟수
        const txCount = await web3.eth.getTransactionCount(accounts[0]);
        // 보내는 사람의 개인키
        const privateKey = Buffer.from("47186be4bd1eb33ebdb386a86f37dd19d15adb18d64b79d50730878a40ae545f","hex")
        // 트랜잭션 내용 객체
        const txObject = {
            // 보내는 사람의 트랜잭션 횟수를 Hex 변환해놓고
            nonce : web3.utils.toHex(txCount),
            // 보내는 사람의 계정 
            from : accounts[0],
            // 받는 사람의 계정
            to : accounts[1],
            // 보낼 금액 단위를 wei로 해준다.
            value : web3.utils.toHex(web3.utils.toWei("1","ether")),
            // 10 ** 18 toHex
            // 트랜잭션에서 사용할 가스 최대치
            gasLimit : web3.utils.toHex(6721975),
            // 보내는 사람이 지불할 가스 가격
            gasPrice : web3.utils.toHex(web3.utils.toWei("1","gwei")),
            data : web3.utils.toHex(""), // 스마트 컨트랙트아 관련된 data

        }
        const tx = new ethTx(txObject)
        tx.sign(privateKey); // sign이라는 함수가 tx객체에 서명 값을 추가해준다.
        console.log(tx);
        // serialize함수를 사용해서 내용을 정렬을 하고
        const serializedTx = tx.serialize();
        // sendSignedTransaction 함수로 
        const TxObject = await web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"));
        console.log(TxObject);
    })

    
});
