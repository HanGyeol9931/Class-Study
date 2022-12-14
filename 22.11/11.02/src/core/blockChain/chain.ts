import {Block} from "@core/blockChain/block";

import { DIFFICULTY_ADJUSTMENT_INTERVAL } from "@core/config";
import { Transaction } from "@core/transaction/transaction";
import { TxIn } from "@core/transaction/txin";
import { TxOut } from "@core/transaction/txout";
import { UnspntTxOut } from "@core/transaction/unspentTxOut";

// 블록의 체인
export class Chain {
    // blockchain Block 배열의 타입을 가진 변수
    private blockchain : Block[];
    private unSpentTxOuts : IUnspentTxOut[];
    private transactionPool : ITransaction[];
    // 처음에 생성될때 construtor로 클래스를 동적할당으로 생성 했을때
    constructor(){
        // 최초의 블록은 거의 하드코딩으로 넣어준다.
        // 생성 될때 최초 블록 하나 추가 배열에  블록 체인에 최초 블록 추가
        this.blockchain = [Block.getGENESIS()];
        this.unSpentTxOuts = [];
        this.transactionPool = [];
    }
    // 트랜잭션 풀을 반환해주는 함수
    public getTransactionPool(): ITransaction[]{
        return this.transactionPool;
    }
    // 트랜잭션 풀에 트랜잭션 추가 함수
    public appendTransactionPool(transaction : ITransaction){
        this.transactionPool.push(transaction);
    }
    // 트랜잭션 풀 업데이트
    public updateTransactionPool(newBlock : IBlock){
        let txPool : ITransaction[] = this.getTransactionPool();
        newBlock.data.forEach((tx : ITransaction)=>{
            txPool = txPool.filter((txp)=>{
                txp.hash !== tx.hash;
            })
        })
        this.transactionPool = txPool;
    }


    // UTXO get 함수 (UTXO 조회 함수)
    public getUnSpentTxOuts() : IUnspentTxOut[]{
        return this.unSpentTxOuts;
    }
    // UTXO 추가 함수
    public appendUTXO(utxo : IUnspentTxOut[]){
        // unSpentTxOuts 배열에 utxo 값을 복사해서 배열에 추가
        this.unSpentTxOuts.push(...utxo);
    } 

    // 마이닝 블록
    public miningBlcok(account : string) : Failable<Block,string>{
        // 코인베이스 트랜잭션의 내용을 임의로 만든 것
        const txin : ITxIn = new TxIn("",this.getLatestBlock().height + 1,undefined);
        const txout : ITxOut = new TxOut(account,50);
        const coinbaseTransaction : Transaction = new Transaction([txin],[txout])
        // createUTXO 함수로 UTXO에 담을 객체를 만들어 준것
        const utxo = coinbaseTransaction.createUTXO();
        // UTXO에 appendUTXO함수로 만든 객체를 추가
        this.appendUTXO(utxo);

        return this.addBlock([coinbaseTransaction])
    }

    // 현재 연결된 블록들 리스트를 학인하기 위해서 getChain 함수로 
    // 연결된 노드들을 확인할수 있는 함수
    public getChain() : Block[]{
        return this.blockchain;
    }
    // 현재 연결된 블록들의 갯수 길이
    // 연결된 노드의 갯수
    public getLength() : number {
        return this.blockchain.length
    }

    // 맨 마지막 블록을 확인하는 함수
    // 맨 마지막 노드 확인
    public getLatestBlock() : Block {
        return this.blockchain[this.blockchain.length-1]
    }

    // 블록 체인에 블록을 추가하는 함수 매개변수로는 블록의 내용을 받는다.
    // 반환값으로는 Failable<Block,string> Block 타입이랑 string타입을 반환 할수 있는 함수
    // 반환 값을 객체이고 {isError:true,value: 여기가 우리가 설정한 타입} 
    // value라는 키값이 Block 타입이나 string 타입을 허용한다.
    public addBlock(data:ITransaction[]) : Failable<Block,string>{
        //getLatestBlock 함수로 마지막 블록을 가져오고
        const previousBlock  = this.getLatestBlock();
        // getLatestBlock 함수로 10본째 전
        const adjustmentBlock :Block = this.getAdjustmentBlock();
        // generateBlock 마이닝이 끝난 추가할 블록을 가져오고
        const newBlock = Block.generateBlock(previousBlock,data,adjustmentBlock)
        // 그 새로운 블록을 이전블록과 검증을 하는데 isValidNewBlock 이전블록(마지막 블록)과 새로운 블록을
        // 매개변수로 전달해서 블록의 높이 검사와 새로운 블록의 이전블록 해시 검사 새로운 블록의 해시 검사
        const isValid = Block.isValidNewBlock(newBlock,previousBlock)

        // 블록의 검증이 끝나고 에러가 있으면 반환
        if(isValid.isError) return {isError:true,value: "에러남"}
        
        // 다 통과했으면 새로운 블록을 블록체인에 추가
        this.blockchain.push(newBlock);

        // 에러가 없다고 알려주고 value로 Block 타입의 newBlock 반환
        return{isError:false,value :newBlock}
    }
    // 체인 검증 코드
    // 매개변수로 Block 타입의 chain 배열을 매개변수로 받고
    // 블록체인을 받고
    public isValidChain(chain : Block[]) : Failable<undefined,string>{
        // 최초 블록 검사 하는 코드
        const genesis = chain[0]

        // 체인의 유효성 검사
        for (let i = 0; i < chain.length; i++) {
            // 현재 인덱스의 블록
            const newBlcok = chain[i];
            // 그 인덱스의 이전블록
            const previousBlock = chain[i-1];
            // 블록 검증 시도
            const isValid =Block.isValidNewBlock(newBlcok,previousBlock);
            // 검사 오류시
            if(isValid.isError) return{isError:true,value : isValid.value}
        }
        // 다 통과하면 패스
        return { isError : false , value :undefined};
    }
    
    // replaceChain 본인과 상대방의 체인을 검사하는 함수
    public replaceChain(receivedChain : Block[]):Failable<undefined,string>{
        // 본인 체인과 상대방 체인을 검사하는 과정
        // 상대방
        const latestReceiveBlock : Block = receivedChain[receivedChain.length-1]
        // 본인
        const latestBlock : Block = this.getLatestBlock();
        // 높이가 0 이면 받은 블록이 최초라서 검사할 필요가 없고
        if(latestReceiveBlock.height === 0){
            return {isError : true ,value : "받은 블록이 최초 블록"}
        }
        // 본인의 블록이 더 길건 같은 블록이면 검사 필요가 없다.
        if(latestReceiveBlock.height <= latestBlock.height){
            return {isError : true, value : "본인의 블록보다 길거나 같은 블록"}
        }
        // 여러명이 빠르게 추가하다보면 검증단계에서  블록의 길이 차이가 있는데
        // 해시 비교를 해서 블록의 이전 블록의 해시가 같다면 블록의 갯수 차이가 있는것으로
        // 검사 에러 이 문제는  사람들이 빠르게 블록의 추가하다가 여러명이 비슷하게 블록
        // 생성이 됐을때 일어남
        if(latestReceiveBlock.previousHash === latestBlock.hash){
            return {isError : true,value: "블록이 하나 만큼 모자라다"}
        }
        // 본인의 체인 더 짧으면 체인 갱신 해준다.
        // 체인을 갱신 해준다.
        this.blockchain = receivedChain;

        // 다 통과 했으니깐 반환
        return {isError : false, value : undefined}
    }

    // 생성 시점기준으로 블록 높이  -10인 블록 구하기

    // 현재 높이 값 < DIFFICULTY_ADJUSTMENT_INTERVAL 보다 크면 최초 블록 반환하고
    // 현재 높이 값이 DIFFICULTY_ADJUSTMENT_INTERVAL 보다 작으면 -10번째 블록 반환
    public getAdjustmentBlock(){
        // 자신의 길이를 getLength함수로 가져오고
        // 자신의 길이가 10 보다 작으면 최초의 블록을 반환한다.
        // 길이가 10보다 크면 -10번째 블록을 반환해준다.
        const currentLength = this.getLength();
        const adjustmentBlock : Block = 
        this.getLength() < DIFFICULTY_ADJUSTMENT_INTERVAL ? 
        Block.getGENESIS() 
        : 
        this.blockchain[currentLength - DIFFICULTY_ADJUSTMENT_INTERVAL];
        return adjustmentBlock; // 최초블록 or -10번째 블록 반환
    }

    updateUTXO(tx : ITransaction){
        // txOutId , txOutIndex, account , amount
        // UTXO 배열을 가져오고 getUnSpentTxOuts함수를 사용해서 
        const unspentTxOuts : UnspntTxOut[] = this.getUnSpentTxOuts();
        // UTXO에 추가할 unspentTxOut 객체를 생성
        // 트랜잭션 객체의 배열안에 있는 txOut 객체를 사용해서 새로 생성될
        // unspentTxOuts 객체를 만들어 준다.
        const newUnspentTxOuts = tx.txOuts.map((txout,index)=>{
            return new UnspntTxOut(tx.hash,index,txout.account,txout.amount);
        })
        // filter 로 unspentTxOuts 배열 안에서 txOut객체들은 제거하고 생성된 newUnspentTxOuts 객체를 UTXO에 추가
        const tmp = unspentTxOuts.filter((v1 : UnspntTxOut)=>{
            const bool = tx.txIns.find((v2 : TxIn)=>{
                return v1.txOutId === v2.txOutId && v1.txOutindex === v2.txOutIndex
            })
            // !undefind == true ;
            // !{} == false;
            return !bool;
        }).concat(newUnspentTxOuts)
        //UTXO에 사용한 unspentTxOut 객체 제거와 생성된 unspentTxOuts 객체를 UTXO에 추가

        // tmp배열을 reduce 함수로 acc 배열 안에서 해당 조건에 맞는 값을 내보내주고
        // acc 배열에 push해서 넣어주고 acc 배열을 반환해서
        // unspentTmp에 담고
        // unspentTmp를 this.unspentTxOut에 바인딩 
        let unspentTmp : UnspntTxOut[] = [];
        const result = tmp.reduce((acc,utxo)=>{
            const find = acc.find(({txOutId,txOutindex})=>{
                return txOutId === utxo.txOutId && txOutindex === utxo.txOutindex
            })
            if(!find) acc.push(utxo)
            return acc
        }, unspentTmp)
        this.unSpentTxOuts = result;
    }
}