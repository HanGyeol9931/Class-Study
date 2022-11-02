let lottoNumber = [];
let res = [];

for(let i =1; i<=45; i++){
    lottoNumber.push(i)
}
for(let i=1;i<=6;i++){
    let random=Math.floor(Math.random()*45+1)
    while(res.includes(random)){
        random=Math.floor(Math.random()*45+1)
    }
    if(lottoNumber.includes(random)){
        res.push(random)
    }
}
console.log(res)