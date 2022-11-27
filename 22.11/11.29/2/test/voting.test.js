const Voting = artifacts.require("Voting");

// only 해당 테스트 코드만 실행 시켜준다.
describe.only("Voting",()=>{
    let deployed; // 배포 컨트랙트 객체
    let candidateList; // 후보자 리스트

    it("deployed",async()=>{
        deployed = await Voting.deployed();
    })
    it("candidateList",async()=>{
        // 컨트랙트에서 배열을 전부 한번에 들고 올수가 없어서
        // 하나씩 호춣 해주는 방식
        const req = [
            deployed.candidateList.call(0),
            deployed.candidateList.call(1),
            deployed.candidateList.call(2),
            deployed.candidateList.call(3),
        ]

        // 비동기로 부르는 동안 처리해 주기
        // Promise 요청 응답이 하나라도 안남을때까지 기달려준다. Promise.all
        // Promise.all(req);

        // 배열을 다 가져와서 담아주고
        candidateList = await Promise.all(req);

        console.log(candidateList);
    })
    it("voteForCandidate",async()=>{
        await deployed.voteForCandidate(candidateList[0]);    
        for (const key of candidateList) {
           let count = await deployed.totalVotesFor(key);
           console.log(`${key} : ${count}`);
        }
    })
})