const merkle = require("merkle");
// Merkle Tree 는 Block에 포함된 트랜잭션들을 나무 형태로 요악한 것
const data = ["123","456","789","000","1111","2222"]
// 머클트리
// 머클트리는 비트코인과 다른 암호화폐에 필수적인 요소 블록 헤더에 있는 각
// 블록들의 필수 요소이고 데이터들을 해시화해서 더한후 해시화를 반복해서
// 트리처럼 뻗어 마지막 루트 해시값을 구한다.
// 머클루트가 처리하는게 암호화폐의 마이닝과 트랙잭션 검증

// 마이닝
// 블록체인은 두가지 요소로 하나는 헤더(블록의 메타데이터)

const merkleTree = merkle("sha256").sync(data);
const Root = merkleTree.root();
console.log(Root);