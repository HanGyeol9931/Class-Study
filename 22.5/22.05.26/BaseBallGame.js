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
// console.log(comNum)
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
    let s = 0;
    let b = 0;
    for(let i = 0;i<3;i++){
        let Num = Number(prompt((i+1)+"번째 숫자를 입력해주세요"))
        while(isNaN(Num)){
            alert("문자0~9사이 숫자를 입력해 주세요")
            Num = Number(prompt((i+1)+"번째 숫자를 입력해주세요"))
        }
        while(USER_Num>=10 || USER_Num<0 ){
            alert("숫자0~9사이 숫자를 입력해주세요")
            Num = Number(prompt((i+1)+"번째 숫자를 입력해주세요"))
        }
        if(USER_Num.includes(Num)){
            alert("첫번째 숫자와 중복된 숫자입니다.다시입력해주세요")
            Num = Number(prompt((i+1)+"번째 숫자를 입력해주세요"))
        }
        USER_Num.push(Num)
    }
    for(let i=0; i<3;i++){
        if(comNum[i]==USER_Num[i]){
            s++
        }
        else if((comNum[i]==USER_Num[i+1])||(comNum[i]==USER_Num[i+2])||(comNum[i]==USER_Num[i-2])||(comNum[i]==USER_Num[i-1])){
            b++
        }
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
