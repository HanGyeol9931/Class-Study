/*
객체(object)
기본 데이터 타입을 제외한 나머지 녀석들 ..... 모두 객체라고 볼수있다.
함수, 배열, 정규표현식..객체는 key, value
중괄호를 사용 한다 {}

프로퍼티 : 객체의 상태를 나타내는값.
메서드 : 프로퍼티를 참조하고 조작할수 있는 동작

*/
// const person = {
//     name: 'Lee',/// 안에 있는 녀석이 프로퍼티
//     age: 20  ///neme, age는 key //Lee,20은 value다.
// };

let conter = {
    num:0,
    increase : function(){
        this.num++
    }
}
let person = {
    name: 'Lee',
    Hello : function(){
        console.log(`Hello my name is ${this.name} `)
    }
}
console.log(typeof person);
console.log(person.Hello);
console.log(person.name);
console.log(person);


//중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체 생성
let empty = {};

//객체 안에 객체를 넣을수 있다.
let student = {
    list:{a:10, b:20, c:30},// 객체
    print: function(){
        console.log("나는 프린트");
    }
}

//전역변수 안쓰는게 좋지만 불가피하게 사용하게 된다면
//1. 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리

let myObj = {};
myObj.cal = {a:null,b:null}
myObj.test = {c:null,d:null}
myObj.test.a = 10;
myObj.test.b = 20;

function sum(){
    return myObj.cal.a+myObj.cal.b;
}

let korea = {
    a:500,
    b:300,
    seoul:{
        a:100,
        b:20,
        c:50,
    }
};

let circle = {
    radius : 5,
    getDiameter : function(){
        return 2*this.radius;// this 는 자기 자신 circle을 뜻한다
    }
}
console.log(circle.getDiameter());

//프로퍼티 접근
// . []를이용한 접근
console.log(circle.radius);
console.log(circle["radius"]);

let obj = {a:10,b:20,c:30};

for (const key in obj) {
    console.log(key)
}
for (const val in obj) {
    console.log(obj[val])
}
for(i in obj){
    console.log("key : "+i+'     value :'+obj[i]);
}

function User(name){

    //this = {};
    this.name = name;
    this.isCheck = false;

    //return this;
}
//let user = new User("홍길동");

function Person(name, age, city)
{
    this.name = name,
    this.age = age,
    this.city = city,
    this.information = function(){
        console.log("나는"+this.name+"나이는"+this.age+"사는곳은"+this.city)
    }
}
//인스턴스
//클래스에 의해 메모리에 저장된 실체 ->객체가 메모리에 저장되어 실제로 존재하는것
let p1 = new Person("사자",19,"에버랜드");
let p2 = new Person("호랑이",20,"앞마당");
p1.information();
p2.information();

console.log(p1)
console.log(p2)

//1.
//회사에 4명이 있어요 (모든 직원에 월급에 대한 정보를 담고 있는 객체가 있다.)
//모든 팀원의 월급을 합한 값을 구한 (함수로(메서드로))결과를 출력하세요
//2.
//객체A가 프로퍼티 값이 값이 숫자인 경우 그 값을 두배로 늘려주는 함수 만들기
let a = {
    w : 200,
    h : 500,
}

//결과
a = {
    w : 400,
    h : 1000,
}




 

