// let user_deta = prompt("가위 바위 보")
// let com_deta = Math.floor(Math.random()*10);
// let bet = prompt("배팅할 돈을 입력해주세요")
// let USER_MONEY = 10000;
// let COM_MONEY = 10000;
// let win = USER_MONEY+bet*2;
// let los = USER_MONEY-bet*2;
// let tie = USER_MONEY-bet
// let com_win = COM_MONEY+bet*2;
// let com_los = COM_MONEY-bet*2;
// let com_tie = COM_MONEY-bet
function ma(a,b){
    return a-b;
}
function pl(a,b){
    return a+b;
}

    

while (i>=9) {
    let user_deta = prompt("가위 바위 보")
let com_deta = Math.floor(Math.random()*10);
let bet = prompt("배팅할 돈을 입력해주세요")
let USER_MONEY = 10000;
let COM_MONEY = 10000;
if (com_deta>=0 && com_deta<=3){
    com_deta = "가위" 
    if (user_deta === "바위"){
         console.log("당신 :",user_deta,"컴퓨터 :",com_deta,"너가 이겼다","<br>",
         "당신 :","컴퓨터")
     }
     else if (user_deta === "보"){
         console.log("당신 :",user_deta,"컴퓨터 :",com_deta,"너가 졌다","<br>",
         "당신 :",los,"컴퓨터",com_win)
     }
     else if (user_deta === "가위"){
        console.log("당신 :",user_deta,"컴퓨터 :",com_deta,"비겼다","<br>",
        "당신 :",tie,"컴퓨터",com_tie)
    }
     else{
        console.log("가위,바위,보 중에 하나만 넣어주세요!")
    }
}
else if (com_deta>=4 && com_deta<=6){
    com_deta = "바위"
    if (user_deta === "가위"){
        console.log("당신 :",user_deta,"컴퓨터 :",com_deta,"너가 졌다","<br>",
        "당신 :",los,"컴퓨터",com_win)
    }
    else if (user_deta === "보"){
        console.log("당신 :",user_deta,"컴퓨터 :",com_deta,"너가 이겼다","<br>",
        "당신 :",win,"컴퓨터",com_los)
    }
    else if (user_deta === "바위"){
        console.log("당신 :",user_deta,"컴퓨터 :",com_deta,"비겼다","<br>",
        "당신 :",tie,"컴퓨터",com_tie)
    }
    else{
            console.log("가위,바위,보 중에 하나만 넣어주세요!")
    }
}
else if ((com_deta>=7) && (com_deta<=9)){
    com_deta = "보"
    if (user_deta === "가위"){
        console.log("당신 :",user_deta,"컴퓨터 :",com_deta,"너가 이겼다")
    }
    else if (user_deta === "바위"){
        console.log("당신 :",user_deta,"컴퓨터 :",com_deta,"너가 졌다","<br>",
        "당신 :",los,"컴퓨터",com_win)
    }
    else if (user_deta === "보"){
        console.log("당신 :",user_deta,"컴퓨터 :",com_deta,"비겼다","<br>",
        "당신 :",tie,"컴퓨터",com_tie)
    }
    else{
        console.log("가위,바위,보 중에 하나만 넣어주세요!")
     }
    }

    i++
}


let USER_MONEY = 10000;
let COM_MONEY = 10000;
let ROUNDS = 1



