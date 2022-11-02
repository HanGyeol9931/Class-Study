let a = []
let init = {
    count : 0,
    array : a
}
function reducer(state = init,action){
    switch (action.type){
        case "gd":
            console.log("성공")
            a.push(action.data)
            console.log("이건 배열",state.array)
            return state
        case "gd1":
            console.log("ㅎㅇ2")
            return state
        case "gd2":
            console.log("ㅎㅇ3")
            return state
        case "gd3":
            console.log("ㅎㅇ4")
            return state
        default:
            return state
    }
}

export const test1 = reducer