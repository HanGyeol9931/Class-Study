//고차함수 : 함수를 인수로 전달받거나 함수를 반환하는 함수
//고차 함수는 외부상태의 변경이나 가변데이터를 피하고 불변성을 지향하는
//함수형 프로그래밍에 기반을 두고 있다. 활용도가 높음
/* 

sort : 정렬함. 원본배열을 직접 변경하며 정렬된 배열을 리턴한다.


*/

// const ftuits = ['banana','apple','orange']
// ftuits.sort();//기본적으로 오름차순
// console.log(ftuits);

// ftuits.reverse();//내림차순
// console.log(ftuits);

// const points = [40,30,1,5,2,25,100];
// //숫자타입을 문자타입으로 바꿔서 유니코드 순서대로 나열을 한다.
// //1 : U+0031    2:U+0032    10: U+0031U+0030
// // points.sort();
// // console.log(points);
// // 숫자요소를 정렬할떄는 정렬순서를 정의하는 비교함수를 인수로 전달해야한다.

// points.sort((a,b)=>a-b);
// console.log(points);

// let sum = function(a,b)
// {
//     return a+b;
// }

// let sum1 = (a,b)=>a+b;
// let double = n=>n*2;
// let double1 = function(n){
//     return n*2;
// }
// let print = () => alert('안녕');

// const numbers = [1,2,3];
// const pow = [];

// for(let i = 0;i<numbers.length;i++)
// {
//     pow.push(numbers[i] **2);
// }


// forEach 단점 : 중간에 멈출수 없다  for보다 성능은 좋지만 가독성이 떨어진다.
// numbers.forEach(item=>pows.push(item**2))
// console.log(pows)

//map : 자주 쓰게 됌.자신을 호출한 배열의 모든 요소를 새로운 배열로 내뱉는다.

const number = [1,4,9]
const roots = number.map(item=>Math.floor(Math.random()*45+1))
console.log(roots)

// const number1 = [4,1,9,10,3,2,5,8,7];

// number1.sort((a,b)=>a-b)
// console.log(number1)

// console.log(roots);//새로운 배열을 반환한다.
// console.log(number);//원본배열은 건드리지 않는다.

// //크롬 소스에서 클릭하고 F5를 눌러주고 F10으로 조절을 해준다.

// for (let index = 0; index < 10; index++) 
// {
//     console.log(index);
// }
// //함수 오버로딩 (함수 이름은 동일하지만 매개변수 갯수가 틀리거나 자료형이 틀리다.)

// function myFunc(a,b,c)
// {
//     const len = arguments.length;
//     if(len==0){
//         console.log("매개변수 없음")
//     }
//     else if(len==1)
//     {
//         console.log("한개")
//     }
//     else if(len==2)
//     {
//         return a+b;
//     }
//     else
//     {
//         return a+b+c;
//     }
// }
// // 함수 오버로딩을 비슷하게 만든것


//디폴트 매개 변수
function call(a, b = 5)
{
    return a+b
}
console.log(call(1))

//Recursive Function(재귀함수)
//1~100까지 합
// let res = 0;
// for(let i = 0;i<101;i++)
// {
//     res+=i
// }

// function RecursiveFunction(n)
// {
//     if(n<=1)return 1;//종료조건
//     return n+RecursiveFunction(n-1);
// }
// //피보나치 수열 재귀함수는 반드시 종료조건을 넣어줘야한다!!
// //나는 재귀함수(자기 자신을 호출한다.)
// function fibo(num)
// {
//     let res = [0,1];
//     if(num==0){
//         console.log([0])
//     }
//     if(num==1){
//         console.log([0,1])
//     }
//     for(let i=2;i<=num;i++)
//     {
//         res.push(resp[i-2]+res[i-1]);
//         console.log(res);
//     }
// }
// // for문 보다 메모리를 많이 차지한다.
// // 종료조건이 없으면 계속 돌아간다.
// //while for 문을 반복적으로 사용 안하고 간결쓸수 있는 점은 장점
// //재귀보다 for 문이 더 빠르다.
// function RecursiveFibo(num)
// {
//     if(num<2)return num;
//     return RecursiveFibo(num-1)+RecursiveFibo(num-2);
// }

// console.log(RecursiveFibo(8))


/*
실습과제

숫자야구게임만들기




*/