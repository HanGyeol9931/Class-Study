function eat(num){
    let _num = num+num;
    return new Promise((resolve) =>{
        setTimeout(() =>{
        resolve(_num)
        console.log(_num)
        },600)
    })
}

// let inter = setInterval(() => {
//     console.log('슈바')
// }, 1000);
// setTimeout(() => {
//     clearInterval(inter);
// }, 4000);


(async function(){
    var _num = await eat(2)
    .then(re(x))
})()
function re(x){
    return eat(x)
}
