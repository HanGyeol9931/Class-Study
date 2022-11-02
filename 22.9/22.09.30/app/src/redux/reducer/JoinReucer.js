let user = []
let init = {
    userData : user
}
function reducer(state = init,action){
    switch (action.type){
        case "JOIN_SUCCESS":
            console.log("이거실행")
            user.push(action.data)
            return state
        default:
            return state
    }
}

export const JoinReducer = reducer