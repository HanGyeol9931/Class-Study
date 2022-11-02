
// 실습 1
let Company = 
{
    Lee : 300,
    Kim : 100,
    San : 200,
    Ban : 150,
}
function sum(a,b,c,d){
    console.log(a+b+c+d)
    return a+b+c+d
}
sum(Company["Lee"],Company["Kim"],Company["San"],Company["Ban"])

//실습 2

let a = {
    w : 200,
    h : 500,
    ba : function(){
       if(typeof this.w === 'number')
       this.w *= 2;
       if(typeof this.h === 'number')
       this.h *= 2;
    }

}
console.log("w의 value :"+a['w'])
console.log("h의 value :"+a['h'])
function go(x){
    for(i in x){
        if((typeof x[i]) == (typeof 1)){
            x[i]=x[i]*2;
        }
    }
    return x;
}
a.ba();
console.log("w의 value :"+a['w'])
console.log("h의 value :"+a['h'])



