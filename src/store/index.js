const initialState = {
    count : 0,
    showCounter : true
}
const reducer = (state = initialState, action) => {
    console.log("Action is ", action)
    switch(action.type) {
        case "INCREMENT" :
            return {...state, count : state.count + 1}
            break;
        case "DECREMENT" :
            return {...state, count : state.count - 1}
            break;
        case "INCREMENTBYTEN" :
            return {...state, count : state.count + action.payload}
            break;
        case "Animation" :
            return {...state, showCounter : !state.showCounter}
            break;
        default : return state;    
    }

}

export default reducer;