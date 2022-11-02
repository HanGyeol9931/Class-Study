//이벤트 리스너

//이벤트 리스너 제거
let el = document.createElement('div');
//el에 test 클래스 추가
el.className = "test test2 test3";
//el에 id 추가
el.id= "test";
//익명함수를 변수에 담아 놓았다.
let onevent = function(){
    console.log('난 이벤트')
}
// el에 이벤트를 추가하는데 이벤트 타입은 click이고 두번째 매개변수 함수는
// onevent 변수에 담긴 익명함수다
el.addEventListener("click",onevent);
//removeEventListener 이벤트를 제거하는데 타입은 click이고 두번째
//매개변수는 제거할 함수
el.removeEventListener('click',onevent)
document.querySelector('.content').appendChild(el)


//클래스의 이름 읽기
console.log(el.className);
console.log(el.classList);

//클래스의 이름을 순서대로 읽기
for (let i = 0; i < el.classList.length; i++) {
    //classList에서 item 함수를 이용해 해당 인덱스의 값을 확인 할수 있다.
    //item(여기에 index)
    console.log(el.classList.item(i));
}

//class list 클래스 추가
//add함수를 사용해서 클래스 추가
//콤마로 여러개의 클래스 추가 가능
el.classList.add("test4", "test5", "test6")

console.log(el.classList)

//class list 클래스 제거
el.classList.remove("test4", "test5", "test6")
console.log(el.classList)
