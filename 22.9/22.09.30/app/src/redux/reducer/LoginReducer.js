let init = {
    id : null,
    pw : null,
    nickname : null,
    login : false,
}
function reducer(state = init,action){
    switch (action.type){
        case "LOGIN_SUCCESS":
            state = action.data
            return state
        case "LOGIN_OUT":
            state = init
            return state
        default:
            return state
    }
}

export const LoginReducer = reducer