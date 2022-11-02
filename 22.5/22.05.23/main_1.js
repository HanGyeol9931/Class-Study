// 조건문
// 만약에 조건이 true면

// let number = 1;
// let number1 = 2;
// //만약에 조건이 참이라면(true)
// if(number,number1){  //1 < 2
//     //여기를 실행해라
//     console.log(1)
// }
// if(조건2){
//     //실행코드
// }

// const age = 30;
// const age1= 20;
// if(age < age1)
// {
//     console.log("if문에 조건이 참일때만 여기가 실행")
// }
// else if(age > age1)
// {
//     console.log("바로 위에 있는 if문에 거짓일때만 여기가 실행")
// }
// else{
//     console.log("위 조건이 전부 아니면 여기가 실행")
// }

// let inputNum = Number(prompt("아무 숫자나 입력"))

// if(inputNum<10){
//     console.log("내가 입력한 값 : ",inputNum)
// }
// else if(inputNum > 10 || inputNum < 20){
//     console.log("첫번째 else if 실행")
//     console.log("내가 입력한 값 : ",inputNum)
// }
// else if(inputNum > 10 && inputNum < 20){
//     console.log("두번째 else if 실행")
//     console.log("내가 입력한 값 : ",inputNum)
// }

// else{
//     console.log("else 실행")
// }
/*
입력을 4개 받는다.(점수 입력받는다)
국어 수학 영어 과학
평균값을 구한다.
평균값이 
70~79 C학점
80~89 B학점
90~100 A학점
70미만 낙제
*/

let subjectEng = prompt("영어 점수");
let subjectMath = prompt("수학 점수");
let subjectSci = prompt("과학 점수");
let subjectKor = prompt("국어 점수");

const subjectEngTypeCasting = Number(subjectEng);
const subjectMathTypeCasting = Number(subjectMath);
const subjectSciTypeCasting = Number(subjectSci);
const subjectKorTypeCasting = Number(subjectKor);

const sum = ("합계" ,subjectEngTypeCasting+subjectMathTypeCasting+subjectSciTypeCasting+subjectKorTypeCasting);
// console.log(sum);

const result = (sum/4);
// console.log(result);


if((result>=70) && (result<=79)){
    alert("C학점")
}
else if((result>=80) && (result<=89)){
    alert("B학점")
}
else if((result>=90) && (result<=100) ){
    alert("A학점")
}
else{
    alert("낙제")
}










