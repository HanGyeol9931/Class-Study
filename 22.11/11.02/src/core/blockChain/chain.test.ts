import { Chain } from "@core/blockChain/chain";

// Chain 테스크 코드 작성
// describe("",()=>{
//     let node : Chain = new Chain(); // 최초 블록 하나 들어 있는 체인 생성

//     it("체인 가져오기 함수 테스트",()=>{
//         console.log(node.getChain());
//     })
//     it("체인 길이 가져오기 함수 테스트",()=>{
//         console.log(node.getLength());
//     })
//     it("체인 마지막 블록 가져오기 함수 테스트",()=>{
//         console.log(node.getLatestBlock());
//     })
//     it("체인 블록 추가 함수 테스트",()=>{
//         for (let i = 0; i < 100; i++) {
//            node.addBlock([`블록 ${i}번째`])
//            console.log(node.getChain().at(-1));
//         }
//         console.log(node.getChain());
        
//     })
// })
describe("UTXO테스트",()=>{
    let node : Chain = new Chain();
    it("mainingBlock() 함수",()=>{
        for (let i = 0; i < 10; i++){
            node.miningBlcok("7C91020020680EFBE45B775942839479739294C686E15D70AD824E16822D7424");
        }
        console.log(node.getLatestBlock().data);
        console.log(node.getUnSpentTxOuts());
    })
})