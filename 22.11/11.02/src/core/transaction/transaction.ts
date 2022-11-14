// transaction 객체 생성 클래스
import { TxIn } from "./txin";
import { TxOut } from "./txout";
import { UnspntTxOut } from "./unspentTxOut";
import { SHA256 } from "crypto-js";

export class Transaction implements ITransaction {
    public hash : string;
    public txOuts : TxOut[]; 
    public txIns : TxIn[];
    constructor(txIns : TxIn[],txOuts : TxOut[]){
        this.txIns = txIns;
        this.txOuts = txOuts;
        this.hash = this.createTransactionHash();
    }
    // static
    // 인스턴스 생성하고 만들어 진다.
    createTransactionHash() : string {
        // 배열의 values를 뽑아서 하나의 문자열로 
        const txoutContent : string = this.txOuts.map((v)=> Object.values(v)).join("");
        const txinContent : string = this.txIns.map((v)=>Object.values(v)).join("");

        // 트랜잭션의 해시값을 만들어주고
        return SHA256(txoutContent + txinContent).toString();

    }

    createUTXO() : UnspntTxOut[]{
        const utxo : UnspntTxOut[] = this.txOuts.map((txout : TxOut,index :number)=>{
            return new UnspntTxOut(this.hash,index,txout.account,txout.amount)
        })
        return utxo;
    }
}

