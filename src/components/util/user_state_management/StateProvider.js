// https://www.youtube.com/watch?v=tEqNSOhCHLU&t=291s
import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// useReducer takes 2 params(same as reduce method of javascript):
// 1. REDUCER FUNCTION
// 2. INITIAL STATE / VALUE
// useReducer returns a PAIR OF VALUES:
// 1. newState
// 2. dispatch method (USED TO SPECIFY THE ACTION TO BE TAKEN) 
// REDUCER function takes 2 params: (returns 1 entity: value or object or array ... which is formed by state + action, where + is some operation)
// 1. CURRENT_STATE
// 2. ACTION (this DICTATES STATE TRANSITION from current state to new state)
export const StateProvider = function({ reducer, initialState, children }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateValue = function() {
    return(useContext(StateContext));
};

