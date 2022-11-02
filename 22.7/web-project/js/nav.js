function drop() {
    const drdwn = document.querySelector('dropdown-content').classList.toggle("show");
}

window.onmouseup = function (e) {
    if (e.target.matches('.ddBtn')) {
        let dropdowns = document.querySelectorAll("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++)
        {
            
        }
    }
}