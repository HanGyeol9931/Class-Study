class Mother{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return console.log('내이름은 '+this.name+"나이는 "+this.age)
    }
}
// let a = new Mother("바보",20);
// a.getInfo();

//extends 키워드를 사용해서 상속 받을수 있다.
//자식 클래스가 부모 클래스를 상속받아서 자식 클래스 에서 부모클래스의 기능을 물려받아서 사용할수 있다.
//기존에 존재하던 기능을 토대로 새로운 기능을 만들수 있다.
class Child extends Mother{
    // constructor(a){
    //     super(name);
    //     this.name = a; 
    // }
}
let b = new Child("나는 자식", 30)
b.getInfo();

class Animal {
     constructor(name){
         this.name = name;
         this.speed = 0;
     }
     run(speed){
         this.speed+=speed;
         console.log(this.name+"은"+this.speed+"로 달린다","나는부모")
     }
     stop(){
        this.speed = 0;
        console.log(this.name+"이 멈췄다")
     }
}
let ani = new Animal("동물");
ani.run(5);
ani.stop();



class Cat extends Animal{
    //함수오버라이딩은 상속관계에서만 됌


    //run 함수가 없으면 Animal의 상속받은 run함수를 실행시킨다.
    //부모의 함수를 받아서 재정의 해서 사용 하는것이 함수오버라이딩
    run(speed){
        this.speed =speed;
        console.log(this.name+"은"+this.speed+"로 달린다","나는 자식")
    }
    speak(){
        console.log("야옹야옹")
    }
    stop(){
        //super는 최상위 클래스를 뜻함 여기서는 부모를 말한다.
        super.stop(); // 부모의 stop을 실행 -> 재정의 해서 사용할수도 있지만
        //super(상속받은 부모 클래스 키워드)를 이용해서 부모 함수를 실행할수 있다.
        //this.speak();
    }
}
let cat = new Cat("고양이")
cat.run(2)
cat.stop()

class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Man extends Human{
    //아래 생성자 처럼 생성자를 정의하면 오류가 난다.
    //상속을 받는 클래스는에서는 반드시 부모클래스를 호출해야 하는데.
    //super를 호출해야 한다.
    //일반적인 함수에서는 new 키워드와 함께 실행되면 빈객체가 만들어지고
    // this 키워드에 이 객체를 할당한다.
    // 반면 상속클랙스 (Man)의 생성자 함수가 실행도면 일반함수에서 일어나는 일이
    //일어나지 않는다. this 에 객체를 할당하는 일을 부모 클랙스의 생성자가 
    // 처리 해주기 바라기 때문임.
    constructor(name,age){
        super(name,age)
        this.name = name;
        this.age = age;
    }
}
let ma = new Man("경일",30)
console.log(ma)


function func(){
    console.log("하이")
}

func();

window.func();

console.log(func()=== window.func());

//this : C++에서는 멤버함수가 속한 클래스를 가르키는 포인터 
//js에서의 this는 실행 컨텍스트가 생성될때 결정이 되고 실행 컨텍스트는 
//함수를 호출할때 생성되느로 this 는 함수가 호출될떼 결정된다. (호출하는 방법에 따라 틀리다)

var abc = 5;
console.log(abc)
console.log(window.a)
console.log(this.a)

function f() {
    if(window===this){
        console.log("윈도우는 this");
    }
}

f();

var student = {
    neme : "hong",
    st : function() {
        console.log(this)
    }
}
student.st();

//전역공간에 있으므로 실행주체는 window 객체가 되기 떄문에
//아래의 this는 전역객체인  window가 나오게 된다.
var s = student.st;
s()

