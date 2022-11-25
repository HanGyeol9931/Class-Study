const { Contract } = require("./controll/compile");
const { Client } = require("./controll/client");

const [abi, bytecode] = Contract.compile("test.sol");

const client = new Client("ws://127.0.0.1:9005");

// console.log(client);

const contract = new client.Web3.eth.Contract(abi);
// console.log(contract);
const txObject = { data: bytecode };

const Address = "0xe59327d98920a08471987057504b1ad2274c49e0";

async function init() {
  // deploy() : 반환값이 promise 객체
  // 트랜잭션이 처리 될때 까지 기달린다.
  const instance = await contract.deploy(txObject).send({ from: Address });
  // 배포하고 메소드나 변수들을 가져와야하는데
  // 필요한게 contract Address
  // instance 객체 안에 options.address에 contract address가 들어있다.
  console.log(instance.options.address);
}
init();
const CA = "0xf562249b19BAb6868Af6cEED108b4cf286240c9A"; //instance.options.address;
console.log("나는 CA", CA);
// 컨트랙스 조회 해서 함수와 변수 가져오기
// 필요한게 abi 와 contract address
const deployed = new client.Web3.eth.Contract(abi, CA);
//   getter로 value값 가져옴
deployed.methods
  .setValue("1234")
  .send({ from: Address })
  .then((data) => {
    console.log(data);
  });
deployed.methods
  .value()
  .call()
  .then((data) => {
    console.log(data);
  });
// geth attach http://127.0.0.1:9000
