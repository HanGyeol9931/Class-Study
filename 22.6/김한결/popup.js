let sos = function(){
    alert('아직 준비가 안됐어요 😄')
}
let button_1 = document.querySelectorAll("button")
for(let i=0;i<button_1.length;i++){
    button_1[i].addEventListener("click",sos)
}