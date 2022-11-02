function eat(num){
    let _num = num+num;
    return new Promise((resolve) =>{
        setTimeout(() =>{
        resolve(_num)
        console.log(_num)
        },600)
    })
}
(async function(){
    var _num = await eat(2)
    .then(x=>{
        return eat(x)
    })
    .then(x=>{
        return eat(x)
    })
    .then(x=>{
        return eat(x)
    })
    .then(x=>{
        return eat(x)
    })
    .then(x=>{
        return eat(x)
    })
    .then(x=>{
        return eat(x)
    })
    .then(x=>{
        return eat(x)
    })
    .then(x=>{
        return eat(x)
    })
    })()

