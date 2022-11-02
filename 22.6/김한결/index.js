let mes = document.querySelector(".mes")

let mes_ = function(e){
    alert('아직 준비가 안됐어요 😄')
}
mes.addEventListener('click',mes_)
let button = document.querySelectorAll(".button")
console.log(button[0])
let button_ = function(e){
    alert('아직 준비가 안됐어요 😄')
}
button[0].addEventListener('click',button_)
button[1].addEventListener('click',button_)

let subsiteBtn = document.querySelector(".subsiteBtn ");

let open = function(){
    let subsite = document.querySelector(".subsite");
    subsite.style.display = "block"
    subsite.onmouseleave = function(){
        subsite.style.display = "none"
    }

}
subsiteBtn.addEventListener('click',open)
