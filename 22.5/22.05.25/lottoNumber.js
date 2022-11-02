let lottoNumber = [];
for(let i=1;i<=6;i++){
    let random=Math.floor(Math.random()*45+1)

    while(lottoNumber.includes(random))
    {
        random=Math.floor(Math.random()*45+1)
    }
    lottoNumber.push(random)
}
lottoNumber.sort((prev,curr)=>prev-curr)
console.log(lottoNumber)