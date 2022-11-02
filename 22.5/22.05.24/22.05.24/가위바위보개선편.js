let USER_MONEY = 10000;
let COM_MONEY = 10000;
let ROUNDS = 1
//실행 시작
for (let i = 0; i <= 9; i++) {
    
    console.log(ROUNDS+"번째 판");
    if (USER_MONEY>0 && COM_MONEY>0){
        game()
    }
    else if(USER_MONEY <= 0){
        console.log("당신은",USER_MONEY,"원으로 패배하셨습니다.")
        break;
    }
    else if (COM_MONEY <= 0){
        console.log("컴퓨터는",COM_MONEY,"원으로 승리하셨습니다.")
        break;
    }
    ROUNDS++
}
//실행끝


function game(){
    //입력값 받는곳
    let user = prompt("가위바위보")
    if(!((user === "보") || (user === "가위") || (user === "바위"))){
        alert("가위 바위 보 중에 하나만 내줘")
        game();
        return;
    }
    let money = Number(prompt("배팅가격을 입력해주세요"))
    if(USER_MONEY<money){
        alert("배팅금액이 당신의 돈을 초과했습니다. 다시 입력하세요.");
        game();
        return;
    }
    else if(COM_MONEY<money){
        alert("배팅금액이 컴퓨터의 돈을 초과했습니다. 다시 입력하세요.");
        game();
        return;
    }
    else if(!(Number(money))){
        alert("잘못입력하셨습니다.")
        game();
        return;
    }

    //구경꾼
    let com_1 = Math.floor(Math.random()*100+1);
    if(com_1==1){
        USER_MONEY=USER_MONEY*1.5
        console.log("구경꾼이 당신에게 1.5배를 후원해줬습니다.")
    }
    //게임결과
    let com = Math.floor(Math.random()*3+1);
    if(com=1){com="가위"}
    else if(com=2){com="바위"}
    else if(com=3){com="보"}
    console.log("컴퓨터 : ",com)
    console.log("당신 : ",user)
    if(user == com){
        console.log("비겼다")
        bet(money)
    }
    else if (user=="가위"){
        if(com=="바위")
        {
            win(money);
        }   
        else if(com=="보")
        {
            lose(money);
        }
    }
    else if (user=="바위"){
        if(com=="보")
        {
            win(money);
        }
        else if(com=="가위")
        {
            lose(money);
        }
    }
    else if (user=="보"){
        if(com=="가위")
        {
            win(money);
        }
        else if(com=="바위")
        {
            lose(money);
        }
        } 
}
function minus(a,b){
    return a-b;
}
function plus(a,b){
    return a+b;
}
function win(c){
    USER_MONEY= plus(USER_MONEY,(c * 2));
    COM_MONEY= minus(COM_MONEY,(c * 2));
    console.log("너가 이겼다")
    console.log("당신의 돈 :",USER_MONEY+"원")
    console.log("컴퓨터의 돈 :",COM_MONEY+"원")
    return
}
function lose(d){
    USER_MONEY=minus(USER_MONEY,(d * 2));
    COM_MONEY=plus(COM_MONEY,(d * 2));
    console.log("너가 졌다")
    console.log("당신의 돈 :",USER_MONEY+"원")
    console.log("컴퓨터의 돈 :",COM_MONEY+"원")
     return
}
function bet(e){
    USER_MONEY= minus(USER_MONEY,e)
    COM_MONEY= plus(COM_MONEY,e)
    console.log("당신의 돈 :",USER_MONEY+"원")
    console.log("컴퓨터의 돈 :",COM_MONEY+"원")
    return
}

