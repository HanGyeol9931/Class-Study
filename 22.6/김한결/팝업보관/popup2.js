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