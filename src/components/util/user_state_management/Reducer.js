export const initialState = {
    user: null,
}

export const actionTypes = {
    SET_USER: "SET_USER",
}

// useReducer takes 2 params(same as reduce method of javascript):
// 1. REDUCER FUNCTION
// 2. INITIAL STATE / VALUE
// useReducer returns a PAIR OF VALUES:
// 1. newState
// 2. dispatch method (USED TO SPECIFY THE ACTION TO BE TAKEN) 
// REDUCER function takes 2 params: (returns 1 entity: value or object or array ... which is formed by state + action, where + is some operation)
// 1. CURRENT_STATE
// 2. ACTION (this DICTATES STATE TRANSITION from current state to new state)
const reducer = function(state, action) {
    console.log("user details: ", action.user);
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}

export default reducer;