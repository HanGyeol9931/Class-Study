
firstName.onkeyup= function(){
    if(firstName.value.match(/^[가-힣]{2,4}$/)){
        document.querySelectorAll(".od")[0].classList.remove("feedback")
        firstName.classList.remove("false_control")
        firstName.classList.add("sucess_control")
    }
    else {
        document.querySelectorAll(".od")[0].classList.add("feedback")
        firstName.classList.remove("sucess_control")
        firstName.classList.add("false_control")
    }
}
email.onkeyup= function(){
    
    if(email.value.match('^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$')){ 
        document.querySelectorAll(".od")[1].classList.remove("feedback")
        email.classList.remove("false_control")
        email.classList.add("sucess_control")
        console.log("이게뭐야")

    }
    else {
        document.querySelectorAll(".od")[1].classList.add("feedback")
        email.classList.remove("sucess_control")
        email.classList.add("false_control")
    }
}
address.onkeyup= function(){
    if(address.value.match(/^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/)){
        document.querySelectorAll(".od")[2].classList.remove("feedback")
        address.classList.remove("false_control")
        address.classList.add("sucess_control")
        console.log(address.classList.value.match("sucess_control"))
        console.log(address.classList.value.match("sucess_control")=="sucess_control")

    }
    else {
        document.querySelectorAll(".od")[2].classList.add("feedback")
        address.classList.remove("sucess_control")
        address.classList.add("false_control")
        console.log(address.classList.value.match("sucess_control"))
    }
}
btn.onclick = function(){
    let name1 = firstName.classList.value.match("sucess_control")
    let email1 = email.classList.value.match("sucess_control")
    let address1 = address.classList.value.match("sucess_control")
    if(name1=="sucess_control"&&email1=="sucess_control"&&address1=="sucess_control"){
        alert("제출 완료")
    }
    else{
        alert("다시 하세요")
        location.href = location.href;
    }
    
}









  