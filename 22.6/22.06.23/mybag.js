// 1. 기능 모듈화
// 모듈이란? 여러 기능들에 관한 코드가 모여 있는 하나의 파일
// 장점 기능 재사용에 편리성

let Gnb = (
    function(){
        function Gnb(a){
            this.pop(a);
        }
        Gnb.prototype.pop = function(a){
            if(gnb === "" || gnb === null){return}
            let temp = document.createElement('ul');
            gnb.appendChild(temp);
            for(let i = 0;i < a;i++){
            document.querySelector("#gnb ul").appendChild(document.createElement('li'));
            document.querySelectorAll("#gnb li")[i].innerHTML= "아빠 힘내세요"
            };
            console.log(a)
        };
    return Gnb; 
    })();
    // Gnb.prototype.pop = function(a){
    //     if(gnb === "" || gnb === null){return}
    //     let temp = document.createElement('ul');
    //     gnb.appendChild(temp);
    //     for(let i = 0;i < a;i++){
    //     document.querySelector("#gnb ul").appendChild(document.createElement('li'));
    //     document.querySelectorAll("#gnb li")[i].innerHTML= "아빠 힘내세요"
    //     };
    //     console.log(a)
    // };
