let maessage = "Hello" , age =25 


userName = "홍길동";

console.log(userName);

// let 1a;
// let my_Name;
// let my-Name;
// apple,Apple


// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#F0";

// const data = 10;
// const value =  



// +, -, *, /, %, **

//alert(2**2);//4(2*2)
//alert(2**3);//8(2*2*2)

//산수연산자
//5*4 // ->20
//"My name is" + " Lee"//-> My name is Lee


//const color = "red"// -> red


/* 
이항 산술 연산자
=======================================
+ ,- ,/ ,* ,%
=======================================
단항 한술 연산자
++ ,--
++(1씩 증가를 해줌.),--(1씩 감소)
*/

let x = 1;
//x++; //x = x+1;
//x = x+1;

x--;
console.log(x)

let number = 5;
let result

//선할당후 후증가
result = number++;
console.log(result, number)

//
result = ++number;
console.log(result,number)

result = number--;
console.log(result,number)

result = --number;
console.log(result,number)


/*
할당연산자
=       x = 5
+=      x+ = 5      x= x+5
-=      x- = 5      x= x-5
*=      x* = 5      x= x*5
/=      x/ = 5      x= x/5
%=      x% = 5      x= x%5
*/


let num = 10;

num+=5; //num = num + 5
console.log("+= 연산자",num)
num-=5; //num = num - 5
console.log("-= 연산자",num)



/*
비교 연산자

==     a==b   a와 b가 같다(값)
===    a===b  a와 b의 값과 타입이 같다.
!=     a != b   a와 b는 값이 다르다.
!=     a != b   a와 b는 값이 다르다.
!==     a !== b   a와 b는 값과 타입이 다르다.

*/

//이상한 결과를 ??
// console.log(5==5); //true
// console.log(5=='5'); //true
// console.log('0'==''); //false
// console.log(0==''); //true
///////////////////////////////////
// console.log(5==='5');

// console.log(5!=8);
// console.log(5!=5);
// console.log(5!=='5');

/* 
대소비교 연산자
>                a>b         a가 b보다 크다.
<                a<b         a가 b보다 작다.
>=                a>=b         a가 b보다 크거나 같다.
<=                a<=b         a가 b보다 작거나 같다.

*/
console.log(5>0);
console.log(5<5);
console.log(5>=5);
console.log(5<=5);

// //만약에 이러이러한 조건이 맞다면
// const a= 1;
// const b= 2;
// if (a<b)) {   // 난 트루임. 맞으니깐
//     // 여기를 실행해라
// }


// 삼항 연산자 많이 쓰면 가독성이 떨이짐
let z = 5;
//결과를?           true    false
let res = z % 2 ? '홀수' : '짝수 ';

console.log(res);

/*
논리연산자
||    논리합(OR)

a || b -> 둘중하나 라도 true면 true
0    0 -> false
1    0 -> true
0    1 -> true
1    1 -> ture
==================================================
&&    논리곱(AND)
a   &&  b   -> 둘다 true여야 true
a || b -> 둘중하나 라도 true면 true
0    0 -> false
1    0 -> false
0    1 -> false
1    1 -> ture


!     부정(NOT)
*/


console.log(true || true); //1  1
console.log(true || false); //1  0
console.log(false || true); //0  1
console.log(false || false); //0  0

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(!false);
console.log(!true);



