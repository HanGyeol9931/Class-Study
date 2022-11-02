let con = {
    name : "홍길동",
    setname : function(firstName,lastName,callBack){
        this.name = firstName+ " "+lastName ;
        callBack(firstName,lastName) ;
        // console.log (this.name+"내이름")
    }
}
function a(a,b){
    console.log(a+"와"+b+"는 행복해")
    
}
con.setname("ㅎ","나",a)