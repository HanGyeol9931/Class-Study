let border = []
let init = {
    count : 0,
    userData : border
}
function reducer(state = init,action){
    switch (action.type){
        case "BORDER_SUCCESS":
            border.push(action.data)
            return state
        default:
            return state
    }
}

export const BorderReducer = reducer