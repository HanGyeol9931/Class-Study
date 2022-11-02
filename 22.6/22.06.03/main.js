// function one(){
//     //setTimeout로 2초 뒤에 콘솔 사용
//         console.log("첫번째")
// }

// function two(){
//     console.log("두번째")
// }

// function three(){
//     console.log("세번째")
// }
// // 순서 첫번째가 2초뒤에 나오고 
// // 두번째 , 세번째가 먼저나옴
// // one();
// // two();
// // three();

// function use(data){
//     return new Promise(function(res,rej){
//         //setTimeout 실행하고 1초 뒤에
//         setTimeout(() => {
//             if(data === 1)
//             {
//                 // one();
//                 res();
//             }
//             else if(data === -1)
//             {
//                 rej(new Error('안돼 돌아가'));
//             }
//         // console 첫번째
            
//         }, 1000);
//     })
// }

// use(-1).then(function(){
//     //then 결과까지 기달리고
//     //two() 함수를 실행시킨다.
//     //three() 함수를 실행시킨다.
//     // two();
//     // three();
//     console.log('난 res (성공^^)')
// }).catch(function(x){
//     console.log('난 rej')
//     console.log(x);
// })
//json 파일을 데이터 처럼 가져와 보기
//이제 데이터를 저장된 것을 가져와 볼꺼야
function go(){
    console.log('죽었어')
}
function loadJson(){
    //fetch 경로에 데이터를 요청한다 기본적으로 method는
    //get(가져온다 읽기)방식과 post(참조도 되고 쓰기 및 수정도 가능)
    //fetch는 비동기 요청 방식이다.
    return fetch("main.json",go2)
    //요청을 하는데 json 방식으로 받는다
    .then((res)=>res.json())
    //player키값의 객체를 가져옴
    .then((json)=>json.player)
    //catch 실패했을때
    .catch(()=>{
        console.log('난 죽었어')
    })
}
function go2(){
    return fetch("main.json")
    .then((res)=>res.json())
    .then((json)=>json.player.user.name) 
}
document.getElementById("doit").addEventListener('click',function(event){
  go2().then((user)=>{
        window.location.href = user;
    })
})



