let com = Math.floor(Math.random()*10)
let comNum = [];
let USER_Num = [];
let Round = 1
for(i=1;i<=3;i++){
    let com = Math.floor(Math.random()*10)
    while(comNum.includes(com))
    {
        com = Math.floor(Math.random()*10)
    }
    comNum.push(com)
}
console.log(comNum)

alert("숫자 야구 게임을 진행하겠습니다.숫자는 0~9까지의 숫자중에서 입력을 하시면 됩니다.컴퓨터가 가지고 있는 숫자를 맞춰주세요.")
for(let i=1;i<=10;i++){
    if(Round<=10){
    GAME()
    }
    else if(Round>10){
        console.log('게임종료')
        break;
    }
    Round++
}

function GAME(){
    console.log(Round+'번째 라운드')
    let USER_Frist = Number(prompt("1번째 숫자를 입력해주세요"))
    while(isNaN(USER_Frist)){
        alert("0~9사이 숫자를 입력해 주세요")
        USER_Frist = Number(prompt("1번째 숫자를 입력해주세요"))
    }
    while(USER_Frist>=10 || USER_Frist<0 ){
        alert("0~9사이 숫자를 입력해주세요")
        USER_Frist = Number(prompt("1번째 숫자를 입력해주세요"))
    }
    let USER_Second = Number(prompt("2번째 숫자를 입력해주세요"))
    while(isNaN(USER_Second)){
        alert("0~9사이 숫자를 입력해 주세요")
        USER_Second = Number(prompt("2번째 숫자를 입력해주세요"))
    }
    while(USER_Second>=10 || USER_Second<0 ){
        alert("0~9사이 숫자를 입력해주세요")
        USER_Second = Number(prompt("1번째 숫자를 입력해주세요"))
    }
    if(USER_Frist==USER_Second){
        alert("첫번째 숫자와 중복된 숫자입니다.다시입력해주세요")
        USER_Second = Number(prompt("2번째 숫자를 입력해주세요"))
    }
    let USER_Third = Number(prompt("3번째 숫자를 입력해주세요"))
    while(isNaN(USER_Third)){
        alert("0~9사이 숫자를 입력해 주세요")
        USER_Third = Number(prompt("3번째 숫자를 입력해주세요"))
    }
    while(USER_Third>=10 || USER_Third<0 ){
        alert("0~9사이 숫자를 입력해주세요")
        USER_Third = Number(prompt("1번째 숫자를 입력해주세요"))
    }
    if(USER_Second==USER_Third){
        alert("두번째 숫자와 중복된 숫자입니다.다시입력해주세요")
        USER_Third = Number(prompt("3번째 숫자를 입력해주세요"))
    }
    else if(USER_Frist==USER_Third){
        alert("첫번째 숫자와 중복된 숫자입니다.다시입력해주세요")
        USER_Third = Number(prompt("3번째 숫자를 입력해주세요"))
    }
    USER_Num.push(USER_Frist,USER_Second,USER_Third)
    let s = 0;
    let b = 0;
    if(comNum[0]==USER_Num[0]){
        s++
    }
    else if((comNum[0]==USER_Num[1])||(comNum[0]==USER_Num[2])){
        b++
    }
    if(comNum[1]==USER_Num[1]){
        s++
    }
    else if((comNum[1]==USER_Num[2])||(comNum[1]==USER_Num[0])){
        b++
    }
    if(comNum[2]==USER_Num[2]){
        s++
    }
    else if((comNum[2]==USER_Num[0])||(comNum[2]==USER_Num[1])){
        b++
    } 
    if((comNum[0]!==USER_Num[0])&&(comNum[1]!==USER_Num[1])&&(comNum[2]!==USER_Num[2])){
        console.log("아웃입니다.")
    }
    if((comNum[0]==USER_Num[0])&&(comNum[1]==USER_Num[1])&&(comNum[2]==USER_Num[2])){
        console.log("당신이 낸 숫자 : "+USER_Num)
        console.log("정답입니다.")
        alert("정답입니다.")
        Round = Round+10
        return;
    }
    console.log("당신이 낸 숫자 :   "+USER_Num)
    console.log(s+'스트라이크    '+b+'볼 입니다.')
    USER_Num.length=0;
}
