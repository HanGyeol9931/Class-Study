alert("space 점프로 요리조리 피해보세요~");

canvas.style.border = "1px solid red ";

//var canvas = document.getElementById('canvas');

//컨텍스트는 캔버스의 그리기 영역이면서 그리기 메서드를 가지는 객체이다. getContext 메서드의 인수로 원하는 컨텍스트의 종류를 전달한다.
var ctx = canvas.getContext('2d');

//캔버스 크기
canvas.width = window.innerWidth;
canvas.height = window.innerHeight/2;

//main 캐릭터 dino object
var dino = {
    //시작위치
    x : 10,
    y : 200,
    //콜리전 범위
    width : 40,
    height : 40,
    draw(){
        //             ( 시 작 위 치 )   (  사  이   즈  )
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        //im2에 나이트 저장되어있음 
        ctx.drawImage(img2, this.x, this.y, this.width, this.height);
    }
}

var floor = {
    //시작위치
    x : 0,
    y : 250,
    //콜리전 범위
    width : canvas.width,
    height : canvas.height,
    draw(){
        ctx.drawImage(img3, this.x, this.y, this.width, this.height);
    }
}

//콜리전 체크 / 콜리전 디텍션 (Collision)

var img1 = new Image();
img1.src = '../img/bee2.png';

var img2 = new Image();
img2.src = '../img/beeGame.png';

var img3 = new Image();
img3.src = '../img/floor.png';

var img4 = new Image();
img4.src = '../img/butterfly.png';



//장애물 객체 1.말벌
class Cactus {
    constructor(){
        this.x = 1500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.drawImage(img1, this.x, this.y, this.width,this.height);
    }
}

//공중 장애물 객체 2. 나비
class Dragon{
    constructor(){
        this.x = 1500;
        this.y = 150;
        this.width = 40;
        this.height = 40;
    }
    draw(){
        ctx.drawImage(img4, this.x, this.y, this.width,this.height);
    }
}

var timer = 0;
var cactus여러개 = [];
var 드래곤여러개 = [];
var 점프timer =0;
var animation;

//게임실행
function 프레임마다실행할거(){
    animation = requestAnimationFrame(프레임마다실행할거); 
    timer +=1;
    //잔상 제거
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //다이노와 땅바당 개체실행
    dino.draw();
    floor.draw();
    //스코어
    ctx.font = "20px malgun gothic"; //폰트의 크기, 글꼴체 지정      
    ctx.fillStyle = "rgba(255,0,255,1)"; //색상지정
    ctx.fillText("score : " + timer,5,30);//x,y값   
    //일시정지버튼

    //random값 지정
    // 70 <= random <= 100
    const rand1 = Math.floor(Math.random() * 101) + 70;
    // 70<= random <= 120
    const rand2 = Math.floor(Math.random() * 121) + 70;

    //장애물 생성-------
    if (timer % rand1 === 0){
        var cactus = new Cactus();
        cactus여러개.push(cactus);    
    }
    
    if (timer % rand2 === 0){
        var dragon = new Dragon();
        드래곤여러개.push(dragon);
    }
    //------장애물 생성
    cactus여러개.forEach((cactus, i, o)=>{
        //x좌표가 0미만이면 제거
        if(cactus.x<0){
            o.splice(i,1)
        }
        //x값을 많이 줄여서 장애물(cactus)가 빠르게 접근하는것처럼 표현함
        cactus.x -=5;
        cactus.draw();
        
        충돌하냐(dino, cactus);
    })

    드래곤여러개.forEach((dragon, i, o)=>{
        //x좌표가 0미만이면 제거
        if(dragon.x<0){
            o.splice(i,1)
        }
        //x값을 많이 줄여서 장애물(드래곤이)가 빠르게 접근하는것처럼 표현함
        dragon.x -=5;

        dragon.draw();
        
        충돌하냐드래곤(dino, dragon);
    })

   if(점프중 == true){
    //점프속도조절
    dino.y -=8; 
    점프timer++;
   }

    if (점프중 == false){
        if(dino.y < 200){
            //낙하 속도조절 
            dino.y += 8;   
        }
     }

    if(점프timer > 15){
        점프중 = false;
        점프timer = 0;
    }

}
//--게임실행종료
프레임마다실행할거();

//충돌확인
function 충돌하냐(dino, cactus){
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if(x축차이 < 0 && y축차이 <0){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
        alert("당신의 Score:" + (timer-1));
        alert("다시하려면 F5를 누르시오");
    }
}

function 충돌하냐드래곤(dino, dragon){
    var x축차이 = dragon.x - (dino.x + dino.width) ;
    var y축차이 = (dino.y < 190 && dino.y > 100);
    //
    if(x축차이 < 0 && y축차이){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
        alert("당신의 Score:" + (timer-1));
        alert("다시하려면 F5를 누르시오");
        console.log(dragon.y)
        console.log(dino.y + dino.height )
    }
}
//--충돌확인 종료
//일시정지 버튼함수

//점프함수
var 점프중 = false;
document.addEventListener('keydown', function(e){
    if(e.code ==='Space'){
        점프중 = true;
    }
})

