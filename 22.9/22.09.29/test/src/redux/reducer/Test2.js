let init = {
    count : 0,
    id : "안녕",
    pw : "나는바보"
}
function reducer(state = init,action){
    switch (action.type){
        case "gd":
            // console.log("ㅎㅇ5")
            return state
        case "gd1":
            console.log("ㅎㅇ6")
            return state
        case "gd2":
            console.log("ㅎㅇ7")
            return state
        case "gd3":
            console.log("ㅎㅇ8")
            return state
        default:
            return state
    }
}

export const test2 = reducer