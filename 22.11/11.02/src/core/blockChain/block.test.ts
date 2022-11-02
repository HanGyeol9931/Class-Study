// 작성한 코드들을 테스트 해보기 위해서 만든 파일
import { Block } from "@core/blockChain/block";
import { GENESIS } from "@core/config";

describe("Block 검증",()=>{
    let newBlock : Block;

    // it() : 테스트할 코드의 최소 단위 공간
    it("블록 추가", ()=>{
        const data = ["Block 2"];
        newBlock = Block.generateBlock(GENESIS,data)
        console.log(newBlock);
    });
    it("블록검증",()=>{
        const isValidNewBlock = Block.isValidNewBlock(newBlock,GENESIS);
        if(isValidNewBlock.isError){
            console.error(isValidNewBlock.isError);
            return expect(true).toBe(false)
        }
        expect(isValidNewBlock.isError).toBe(false);
    })
});

// describe 함수를 사용해서 테스트할꺼고 함수들을 많이 작성할 경우
// 연관테스트 함수끼리 그룹핑 시켜주는 역활