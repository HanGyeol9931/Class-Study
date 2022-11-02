let USER = prompt("가위바위보")
let COM = Math.floor(Math.random()*3+1);
if(COM=1){COM="가위"}
else if(COM=2){COM="바위"}
else if(COM=3){COM="보"}
console.log("컴퓨터 : ",COM)
console.log("당신 : ",USER)
if(USER == COM){
    console.log("비겼다")
}
else if (USER=="가위"){
    if(COM=="바위")console.log("너가 이겼다");
    else if(COM=="보")console.log("너가 졌다");
}
else if (USER=="바위"){
    if(COM=="보")console.log("너가 이겼다");
    else if(COM=="가위")console.log("너가 졌다");
}
else if (USER=="보"){
    if(COM=="가위")console.log("너가 이겼다");
    else if(COM=="바위")console.log("너가 졌다");
}
else console.log("다시해");
