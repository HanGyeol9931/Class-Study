comNum = [];
for(i=1;i<=3;i++){
    let com = Math.floor(Math.random()*10)
    while(comNum.includes(com))
    {
        com = Math.floor(Math.random()*10)
    }
    comNum.push(com)
}
console.log(comNum)
let USER_Num = [];
comNum = [];
// function go(comNum,USER_Num){(comNum[0]==USER_Num[0])&&(comNum[1]==USER_Num[1])&&(comNum[2]==USER_Num[2])}
// function no(comNum,USER_Num){ (comNum[0]!==USER_Num[0])&&(comNum[1]!==USER_Num[1])&&(comNum[2]!==USER_Num[2])}
let USER_Frist = Number(prompt("1번째 숫자를 입력해주세요"))
let USER_Second = Number(prompt("2번째 숫자를 입력해주세요"))
let USER_Third = Number(prompt("3번째 숫자를 입력해주세요"))
USER_Num.push(USER_Frist,USER_Second,USER_Third)
if(USER_Num.includes(USER_Frist)){
    console.log(1)
}
