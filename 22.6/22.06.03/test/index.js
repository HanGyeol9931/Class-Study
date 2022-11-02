//컴퓨터의 스코어
let comScore = 0;
//플레이어의 스코어
let userSocre = 0;

let turn = false;
//게임의 횟수
let gameCount = 10;
com.disabled = true;

function userShoot(){
    if (turn) return;
    let shootType = Math.random() < 0.5 ? 2 : 3; // ? 는 비교해서 참이면 앞에꺼를 쓰고 거짓이면 뒤에꺼로 사용한다
    if(shootType === 2){
        if(Math.random() < 0.5){
            console.log("user : 2점 슛 성공")
            userSocreUpdate(shootType)
        }
        else{
            console.log("user : 2점 슛 실패")
        }
    }
    else{
        if(Math.random() < 0.33){
            console.log("user : 3점 슛 성공")
            userSocreUpdate(shootType)
        }
        else{
            console.log("user : 3점 슛 실패")
        }
    }
    textUpdate('컴퓨터')
    turn = true;
}
function comShoot(){
    if(!turn) return;
    //turn이 false면 return문으로 함수 종료
    let shootType = Math.random() < 0.5 ? 2 : 3; // ? 는 비교해서 참이면 앞에꺼를 쓰고 거짓이면 뒤에꺼로 사용한다
    if(shootType === 2){
        if(Math.random() < 0.5){
            console.log("com : 2점 슛 성공")
            comSocreUpdate(shootType)
        }
        else{
            console.log("com : 2점 슛 실패")
        }
    }
    else{
        if(Math.random() < 0.33){
            console.log("com : 3점 슛 성공")
            comSocreUpdate(shootType)
        }
        else{
            console.log("com : 3점 슛 실패")
        }
    }
    textUpdate('유저')
    gameCounting()
    //다 동작후 turn을 true로
    turn = false;
}

// document.querySelector(".user").addEventListener()
// .addEventListener()
// id는 고유 하나만 존재하기 때문에 
// document.querySelector(요소의 클레스나 아이디 아니면 어트리뷰트 선택자)요소선택자
// .addEventListener 첫 매개변수는 이벤트 타입을 문자열로 두번째 매개변수는 이벤트작동시
//실행할 함수
user.addEventListener("click",function(){
    //user를 click클릭하면 실행 되는곳
    //userShoot 함수 실행
    userShoot();
})

com.addEventListener("click",function(){
    //user를 click클릭하면 실행 되는곳
    //userShoot 함수 실행
    comShoot();
})

function userSocreUpdate(addScore){
    //userScore에 addScore값을 증가 시킨다.
    userSocre += addScore;
    console.log(userSocre)
    document.querySelector('.player-score').innerHTML = userSocre;
}
function comSocreUpdate(addScore){
    //comScore에 addScore값을 증가 시킨다.
    comScore += addScore;
    console.log(comScore)
    document.querySelector('.computer-score').innerHTML = comScore;
}
//text를 갱신하는 함수
function textUpdate(name){
    text.innerHTML = `${name}의 차례`
    switch (name) {
        case "유저":
            com.disabled = true;
            user.disabled = false;
            break;
        case "컴퓨터":
            com.disabled = false;
            user.disabled = true;
            break;
        default:
            break;
    }

}

function gameCounting (){
    gameCount--
    shots.innerHTML = gameCount;
    //게임 카운트 감소
    if(gameCount === 0){
        //게임의 승패를 보여주고
        if(comScore < userSocre){
            text.innerHTML = "유저의 승리"
        }
        else if(comScore > userSocre){
            text.innerHTML = "컴퓨터의 승리"
        }
        else{
            text.innerHTML = "무승부"
        }
        com.disabled = true;
        user.disabled = true;
    }
}




