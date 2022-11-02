/* 

배열이란?
여러개의 수를 순차적으로 나열.
사용빈도는 매우 높다.
일반적인 배열은 익덱스로 빠르게 접근이 된다. 요소를 삽입,삭제하는 경우에는 효율적이지 않다.
자바스크립트에서의 배열은 해시 테이블로 구현된 객체다.
인덱스로 접근하는 경우 일반적인 배열보다 퍼포먼스가 떨어진다.
요소를 삽입, 삭제하는 경우에는 일반적인 배열보다 빠르다.
Splice : 배열 중간에 데이터를 삽입 또는 삭제를 하는경우 사용
*/
//1.

const arrNum = new Array();
//인덱스   배열이 가지고있는 값 엘리먼트
arrNum[0] = 1;
arrNum[1] = 2;
arrNum[2] = "배열?";
console.log(arrNum);


const arrNum1 = new Array(1,2,3,"하하하",'A');

console.log(arrNum1[0]);
console.log(arrNum1[3]);
console.log(arrNum1[1]);
//선언과 동시에
const arrNum2 = [1,2,3,4,5,6,7,8,9];

console.log(arrNum2);

//빈배열
const arrNum3 = [];
arrNum3[0] = 1;
arrNum3[1] = 2;

console.log(arrNum3);

//빈배열
const arrNum4 = [];
for (let i =0 ;i< 5;i++) {
    arrNum4[i] = i+1
}

console.log(arrNum4);
//빈 배열
for(let i =0;i<arrNum4.length;i++){
    document.write(arrNum4[i])
}

const arr = [1,2,3];
console.log("arr의 데이터 : ",arr);
console.log(arr.length);


arr.push(4);
console.log("push이후 arr의 데이터 :",arr);
console.log(arr.length);
arr.pop(4);

console.log("pop이후 arr의 데이터 :",arr);
console.log(arr.length);

//현재 legth 프로퍼티 값보다 작은 값을 할당하면 배열의 길이가 줄어듬
const arr1 = [1,2,3,4,5]; // length : 5
arr1.length = 3; //3
console.log(arr1)
//배열의 위치에 연속적으로 존재하지 않는다. 비어있는 값을 희소배열이라고 한다.
const arr2 = [1];
arr2.length = 3;
console.log(arr2.length);
console.log(arr2);

const arr3 = [1, ,3];
console.log(arr3);

/*
배열의 다양한 메서드들
push: 배열의 끝에 원하는 값을 추가한다.
pop: 마지막에 있는 녀석 삭제
shift: 배열의 첫번째 있는 녀석을 삭제
reverse: 배열을 역순으로 뒤집어준다.
concat:두개의 배열을 합쳐준다.
indexOf: 배열에서 인수로 전달된 다음에 요소를 검색 -> 인덱스를 반환
배열에 인수로 전달한 요소의 중복되는 요소가 여러개가 있다면
첫번째로 검색된 요소의 인덱스를 반환한다.
만약 검색하려는 데이터가 없으면 -1를 반환한다.

*/

let arr4 = [4,5,10,3,2,111,99];
// arr4.shift()
// arr4.sort();
console.log(arr4);

let arr5 = [1,2,3,4,5]
arr4= arr4.concat(arr5)//arr4에 arr5번을 합친거

arr4.indexOf
console.log(arr4);

const arr6 = [1,2,2,3]
console.log(arr6.indexOf(2));
console.log(arr6.indexOf(4));
console.log(arr6.indexOf(2,2));// 두번째 인수는 검색을 시작할 인덱스다.


const foods = ['apple','banana']

// if(foods.indexOf('orange')===-1)
// {
//     foods.push('orange')
// }
//includes 포함하고 있다면
if(!foods.includes('orange')){
    foods.push('remon'); // 없으면 오렌지를 넣어라
}
console.log(foods);

const numArr = [1,2,3,4];
//배열의 인덱스 1부터 2개의 요소를 제거  그자리에 30,40을 넣는다
// const res = numArr.splice(1,2,30,40);
const res = numArr.splice(1,2);

console.log(res)
console.log(numArr)


const numArr1 = [1,2,3,1,2];
//배열에서 특정요소를 제거하러면 indexOf메서드를 통해
//특정 요소르의 인덱스를 가져오고 splice 메서드를 사용

function remove(arr,item){
    //제거할 item 요소의 인덱스 item요소가 여러개 있다면 첫번째 요소만 제거
    const index = arr.indexOf(item);
    //제거할 item 있다면 날린다
    if(index !==-1) arr.splice(index,1);

    return
}

console.log(remove(numArr1,2));




