
// // 스위치는 if과 흡사 하다.
// const a = 1;
// switch (a) {
//     case 1:
//         console.log("나는 스위치문이다.")
//         break;
//     default:
//         console.log("나는 스위치문이 아니다.")
//         break;
// }
// // 브레이크를 만나면 모든 녀석들을 건너띄고 간다.
// switch (표현식) {
//     case 표현식1:  //if
//         break;           
//     case 표현식2:  // else if
//         break;

//     default:    // else
//         break;
// }

// let input = Number(prompt("숫자입력해라"))
// const COMPARE_NUM = 1;
// const COMPARENUM_1 = 2;
// switch (input) {
//     case COMPARE_NUM:
//         console.log("1번째 케이스 실행 : ",input)
//         console.log("내가 입력한 숫자 : ",input)
//         break; // 코드에서 빠져나오는 역활을 함.
//     case COMPARENUM_1:
//         console.log("2번째 케이스 실행: ",input)
//         console.log("내가 입력한 숫자 : ",input)
//         break;  
//     default:
//         console.log("디폴트 실행")
//         break;
// }


let randomNumber = Math.random();//0~1사이의 난수 발생
console.log(randomNumber);

let rand1 = Math.floor(Math.random());//floor 소수점 ㅃㅇ~
console.log(rand1)

let rand2 = Math.floor(Math.random()*10);
console.log(rand2)


//가위바위보 게임
//유저랑 컴퓨터랑 하기
//유저는 가위,바위,보 셋중 하나를 낸다.
//컴퓨터도 마찬가지로 가위,바위 보를 낸다.(랜덤하게)
//결과에 따라 무승부 , 패배, 승리를 표시한다.