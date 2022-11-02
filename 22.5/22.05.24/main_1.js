/* 
function

함수?
코드 재사용성이 높디.
코드 유지보수가 좋다.
함수는 정의를 통해서 생성한다.

*/

// let a;
// let b;
// let result = a+b;
//  console.log(result)

//        이름, 매개변수 2개
 function sum(a,b,c){

    return a+b+c; //a와b를 더한 결과를 리턴한다 (return 반환한다 내뱉는다)  
 }
let result = sum(2,5);
console.log(result);

function print(){
    console.log("함수호출");
}
print();// 함수 호출

function sum1(a,b){
    console.log(arguments.length)//rguments.length 매개변수의 길이
    return a+b;
}
console.log(sum1(1,2,3,4,5));//인자가 초과 되어도 무시한다.// 매개변수는 2개까지 가능한데 많으면 앞의 두개만 사용하고 나머지는 버린다


/* 
함수의 정의 방식에는 총 4가지가 있다.
1.함수 선언문

2.함수 표현식
익명
기명
3.Function생성자 함수

4.ES6 arrow Function
let add=(x,y)=>x+y
*/

//var,let,const

foo();// 호이스팅이 일어남
foo2();//함수 표현식은 호이스팅이 일어나지 않는다.
function foo(){
    console.log("hello World")
}

let foo2 = function(){
    console.log("나는 푸우우우우~2")
}

// let foo3;
// foo3()
// foo3 = function(){
//     console.log("나는 푸우우웅~3")
// }


//전연변수 많이 안쓰는게 좋음 지역변수 지역변수를 활용하는게 좋음
var a= 1;
for (let i = 0; i < 2; i++) {
    let d ="let로 선언된 d" ;
        console.log(a);
    for (let k = 0; k < 2; k++) {
        console.log(a);
        if(true){
            d=2;
        }
        console.log(d);
    }
    
    
}









