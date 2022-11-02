comNum = [];
str = [];
ROUNDS = 1;
userMoney= 100000;
Game_Num= [];
comCard=[];
comStrCard =[];
userStrCard =[];
userCard = [];
Data = [];
for(let i =1;i<14;i++){
    comNum.push(i)
    str.push("♥️")
}
for(let i =1;i<14;i++){
    comNum.push(i)
    str.push("♦️")
}
for(let i =1;i<14;i++){
    comNum.push(i)
    str.push("♠️")
}
for(let i =1;i<14;i++){
    comNum.push(i)
    str.push("♣️")
}
alert("당신의 자본은 10만원 입니다.당신의 카드숫자가 컴퓨터 카드의 두개의 카드 숫자 사이에 있다면 당신의 승리 밖에 있다면 패배 승리시 +10000원 패배시 -10000원이고 게임은 돈을 다 쓰거나 17판이 끝날때 까지 진행이 됩니다. ")
for(let i=1;i<18;i++){
    if(ROUNDS==17){
        console.log("당신은 17라운드를 버티고")
        console.log("게임에서 승리했습니다")
        console.log("게임끝")
        break;
    }
    
    if(userMoney > 0){
         Game()
    }
    else if(userMoney <= 0){
        console.log("게임끝")
        break;
    }
}

function Game(){
    alert("랜덤된 숫자가 나옵니다.기달려주세요")
    console.log(ROUNDS+"째 판")
    let random = Math.floor(Math.random()*comNum.length)
    let string = str.splice(random,1);
    let Num = comNum.splice(random,1)
    while(Data.includes(string+Num)){
        random = Math.floor(Math.random()*comNum.length)
        Num = comNum.splice(random,1);
        string = str.splice(random,1);
        comStrCard.push(string)
        comCard.push(Num)
    }
    userCard.push(Num)
    userStrCard.push(string)
    Data.push(string+Num)
    
    for(let i=0;i<=1;i++){
        random = Math.floor(Math.random()*comNum.length)
        string = str.splice(random,1);
        Num = comNum.splice(random,1);
        while(Data.includes(string+Num)){
            random = Math.floor(Math.random()*comNum.length)
            Num = comNum.splice(random,1);
            string = str.splice(random,1);
            comStrCard.push(string)
            comCard.push(Num)
        }
        comStrCard.push(string)
        comCard.push(Num)
        Data.push(string+Num)

    }
   
    comCard.sort((a,b)=>a-b);
    console.log("당신의 카드 : "+userStrCard+userCard)
    console.log("컴퓨터의 첫번째카드 : "+comStrCard[0]+comCard[0])
    console.log("컴퓨터의 두번째카드 : "+comStrCard[1]+comCard[1])

    if((parseInt(comCard[0])<parseInt(userCard)) && (parseInt(comCard[1])>parseInt(userCard))){
        console.log("축하합니다.")
        console.log("이겼습니다.")
        userMoney+=10000
        console.log("당신의 돈 : "+userMoney)
    }
    else{
        console.log("졌습니다.")
        userMoney-=10000
        console.log("당신의 돈 : "+userMoney)
    }
    userStrCard.length=0
    userCard.length=0
    comCard.length=0
    comStrCard.length=0
    ROUNDS ++
}



