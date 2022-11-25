const helloWorld = artifacts.require("HelloWorld");

// 테스트 코드 실행 명령어
// npx truffle test
// 실행후 마이닝해야 뜬다
contract("HelloWorld", (account) => {
  console.log(account);

  let hello;
  describe("hello contract", () => {
    it("contract", async () => {
      hello = await helloWorld.deployed();
      console.log(hello);
    });
    it("get value", async () => {
      console.log(await hello.value.call());
    });
    it("set value",async()=>{
      await hello.setValue("sdafasdfsadf");
      console.log(await hello.value.call());
    })
  });
});
