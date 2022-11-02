let subsiteBtn = document.querySelector(".subsiteBtn ");

let open = function(){
    let subsite = document.querySelector(".subsite");
    subsite.style.display = "block"
    subsite.onmouseleave = function(){
        subsite.style.display = "none"
    }

}
subsiteBtn.addEventListener('click',open)


let btn_1 = document.querySelector("#btn_1")
let btn_2 = document.querySelector("#btn_2")
let btn_3 = document.querySelector("#btn_3")
let btn_1_icon =document.querySelector(".bi-heart")
let btn_2_icon =document.querySelector(".bi-activity")
let btn_3_icon =document.querySelector(".bi-cash")
let display1 =document.querySelector(".display_1")
let display2 =document.querySelector(".display_2")
let display3 =document.querySelector(".display_3")


let fir_btn = function(){
    btn_1.style.borderBottom = "3px solid #d93025"
    btn_1.style.color = "#d93025"
    btn_1_icon.style.color = "#d93025"
    display1.style.display = "flex"
    btn_2.style.border = "none"
    btn_2.style.color = "#5f6368"
    btn_2_icon.style.color = "#5f6368"
    display2.style.display = "none"
    btn_3.style.borderBottom = "none"
    btn_3.style.color = "#5f6368"
    btn_3_icon.style.color = "#5f6368"
    display3.style.display = "none"
}
let sed_btn = function(){
    btn_1.style.borderBottom = "none"
    btn_1.style.color = "#5f6368"
    btn_1_icon.style.color = "#5f6368"
    display1.style.display = "none"
    btn_2.style.borderBottom = "3px solid #1a73e8"
    btn_2.style.color = "#1a73e8"
    btn_2_icon.style.color = "#1a73e8"
    display2.style.display = "flex"
    btn_3.style.borderBottom = "none"
    btn_3.style.color = "#5f6368"
    btn_3_icon.style.color = "#5f6368"
    display3.style.display = "none"
}
let tre_btn = function(){
    btn_1.style.borderBottom = "none"
    btn_1.style.color = "#5f6368"
    btn_1_icon.style.color = "#5f6368"
    display1.style.display = "none"
    btn_2.style.borderBottom = "none"
    btn_2.style.color = "#5f6368"
    btn_2_icon.style.color = "#5f6368"
    display2.style.display = "none"
    btn_3.style.borderBottom = "3px solid #188038"
    btn_3.style.color = "#188038"
    btn_3_icon.style.color = "#188038"
    display3.style.display = "flex"
}
btn_1.addEventListener('click',fir_btn)
btn_2.addEventListener('click',sed_btn)
btn_3.addEventListener('click',tre_btn)

let sideTabs = document.querySelectorAll('.side-tab');

let slideIndex = 0;

sideTabs.forEach((e,index) => {
    e.onclick = function(){
        if(slideIndex === index)
        {
            return
        }
        else{      
            sideTabs[slideIndex].classList.remove('side_main');
            slideIndex = index;
            sideTabs[slideIndex].classList.add('side_main');
        }
    }
})

let sos = function(){
    alert('아직 준비가 안됐어요 😄')
}
let button_1 = document.querySelectorAll("button")
for(let i=0;i<button_1.length;i++){
    button_1[i].addEventListener("click",sos)
}

let click = document.querySelectorAll(".click_me")
let sideDisplaySub = document.querySelectorAll(".side_display_sub")
let sideDisplay = function(){
    if(sideDisplaySub[0].style.display=="flex"){
        click[0].style.display="flex"
        for(let i=0;i<sideDisplaySub.length;i++){
            sideDisplaySub[i].style.display="none"
        }
    }
    else{
        click[0].style.display="none"
        for(let i=0;i<sideDisplaySub.length;i++){
            sideDisplaySub[i].style.display="flex"
        }
    }
}

click[0].addEventListener('click',sideDisplay)
click[1].addEventListener('click',sideDisplay)

function pop(){
    let width = 536;
    let height = 315;
    let left = (window.screen.width/2)
    let top = (window.screen.height/4)
    let windowStatus = "width ="+width+", height="+height+"top="+top+", left="+left+", scrollbar=yes, status=yes, resizable=yes, titlebar=yes"
    const url = "popup.html"
    window.open(url,"pop",windowStatus)
}
let input = document.querySelector(".super");
let button = document.querySelector(".btn-primary");
button.disabled = true;
input.addEventListener("keyup", stateHandle);
function stateHandle() {
    if(input.value !== ""){
        button.disabled = false; 
    }
    else{
        button.disabled = true;
    }
}
let popupclose = function(e){
    if((e.target.className === "hide") || (e.target.className.animVal === "bi bi-x"))
    document.querySelector(".hide").style.display="none"
}
let popupopen = function(){
    document.querySelector(".hide").style.display="flex"
}


document.querySelector("svg").addEventListener('click',popupclose)
document.querySelector(".bbang").addEventListener('click',popupopen)
document.querySelector(".hide").addEventListener('click',e => {popupclose(e)})

