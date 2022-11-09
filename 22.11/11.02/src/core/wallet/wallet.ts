import elliptic from "elliptic";
import { SHA256 } from "crypto-js";

// elliptic 인스턴스 생성
const ec = new elliptic.ec("secp256k1");

export interface ReceivedTx {
    sender : string;
    received : string;
    amount : number;
    signatrue : elliptic.ec.Signature;
}

export class Wallet {
    public account : string;
    public publicKey : string;
    public balance : number;
    public signatrue : elliptic.ec.Signature;

    constructor(sender : string ,signatrue : elliptic.ec.Signature){
        this.publicKey = sender;
        this.account = this.getAccount();
        this.signatrue = signatrue;
        this.balance = 0;
    }

    public getAccount(): string{
        return Buffer.from(this.publicKey).slice(26).toString();
    }
    static sendTransaction(receivedTx : ReceivedTx){
        // 서명 검증
        // 공개키 , 보내는 사람 : 공개키, 받는 사람 : 계정, 보낼금액
        console.log(receivedTx);
        const verify = Wallet.getVerify(receivedTx);
        if(verify.isError) throw new Error(verify.value);
        // 보내는 사람의 지갑 정보르 최산화
        // 현재 가지고 있는 정보 공개키 , 실제 트랜젝션에 넣을 정보는 account 정보
        const myWallet = new this(receivedTx.sender, receivedTx.signatrue);
        console.log(myWallet)
    }

    static getVerify(receivedTx : ReceivedTx) : Failable<undefined, string>{
        const {sender , received , amount, signatrue} = receivedTx;
        const data : [string,string,number] = [sender,received,amount];
        const hash : string = SHA256(data.join("")).toString();

        const keyPair = ec.keyFromPublic(sender,"hex");
        const isVerify = keyPair.verify(hash,signatrue);
        if(!isVerify) return {isError : true,value : "서명 검증 안됨"}

        return {isError : false,value : undefined}
    } 
}

