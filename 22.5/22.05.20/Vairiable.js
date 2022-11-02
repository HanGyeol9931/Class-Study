//변수(데이터를 저장하는 공간)

//키워드 변수 
var num = 1;
console.log(num);

var str = "나는 무엇일까요?"
console.log(str);

var any = [1,2,3,4,5,"ㄹㅇㅋㅋ"];
console.log(any);

//변수를 사용하려면 반드시 선언을 해야한다.
var num1 = 1; //변수 선언
num1 = 20; //초기화
console.log(num1);
var num2;// 변수 선언과 동시에 초기화

var any = 10; 
console.log(any);
console.log(num2);

var score;//선언

score = 100; // 할당

console.log(score);

score = 20;// 재할당

console.log(score);

var score = 1000000; // 재선언, 재할당
console.log(score)

//var : 재선언, 재할당 가능
//let : 재선언 불가, 재할당 가능
//const: 재선언 불가, 재할당 불가능

let number = 5;
console.log("let으로 선언한 녀석",number)
number = 10;
console.log("let으로 선언한 녀석",number)
// let : 재선언 불가

const maxNumber = 1;
console.log("const 키워드로 선언한 녀석",maxNumber)
//maxNumber = 2;//재할당 불가
//console.log("const 키워드로 선언한 녀석",maxNumber)
//const maxNumber = 2;// 재선언 불가

console.log(number+maxNumber)

const a = 1;
const b = 2;
const c = a+b;
console.log(c);

//변수이름을 지을때 주의사항.
//누가봐도 알아먹을수 있게 지을것.
//한글쓰지마라...s
//풀네이밍으로 써줄것
//
const 나는한글변수 = "죽고싶니?";
console.log(나는한글변수)

/* 
데이터타입 
===========================================
원시타입    ㅣ   숫자타입(number)     숫자,정수,실수 구분없이 하나의 숫자타입만 존재
          ㅣ   문자열타입(string)  : 문자열
          ㅣ   불리언타입(Boolean) : 참(true)과 거짓(false)
          ㅣ   undefined        : var키워드로 선언된 변수에 암묵적으로 할당되는
          ㅣ   null        : 값이 없다는 것을 의도적으로 명시할때 사용된다
          ㅣ   심벌타입(symbol)        : ES6에서 추가된 7번째 타입
--------------------------------------------
객체타입    ㅣ 객체, 함수, 배열등등.......


*/
const inteager = 10; //정수
const double = 10.12; // 실수
const negative = -20;// 음의정수

console.log(typeof inteager)
console.log(typeof double)
console.log(typeof negative)

const binary = 0b01000001;// 2진수
const hex = 0x41; // 16진수
console.log(binary)
console.log(hex)

console.log(1 === 1.0)
console.log(3/2)

const string = "문자열";
const string1 = '문자열1';
console.log(string)
console.log(string1)


let d = 10;
//alert : 경고창을 띄운다
//alert(d);

//let value = prompt("숫자입력해보기")
console.log('valte의 값 :',value)

/*
사칙연산
+ ,- ,* ,/ ,% : 몫은 버리고 나머지



*/
const nuber1 = 5;
const nuber2 = 3;

const result = nuber1+nuber2
const result1 = nuber1-nuber2
const result2 = nuber1*nuber2
const result3 = nuber1/nuber2
const result4 = nuber1%nuber2


console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)


let input1 = prompt ("첫번째 숫자입력")
let input2 = prompt("두번째 숫자 입력")


//형 변환
let inputTypeCasting = Number(input1);//입력한 문자열을 숫자로 형변환
let inputTypeCasting1 = Number(input2);


//console.log(input1+input2); //결과는 문자열로..
console.log(inputTypeCasting+inputTypeCasting1);//위에 형변환에 의해 원하는 결과가 나온다.

/* 
지금 해볼것.
입력을 4개를 점수를받는다.(과목 4개 , 영어, 수학, 과학 , 국어)
입력받은 4개의 총 합을 구하고
평균값을 출력하라.




*/


