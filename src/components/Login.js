import React, { useState } from 'react';
import { logo } from './util/Constants';
import { Button } from '@material-ui/core';
import { auth, provider } from '../config/firebase-config';
import { useStateValue } from '../components/util/user_state_management/StateProvider';
import { actionTypes } from '../components/util/user_state_management/Reducer';

import '../styles/login.css';

function Login() {

    const [{ }, dispatch] = useStateValue();
    const [loginToggle, setLoginToggle] = useState(1);

    // useReducer takes 2 params(same as reduce method of javascript):
    // 1. REDUCER FUNCTION
    // 2. INITIAL STATE / VALUE
    // -----------useReducer returns a PAIR OF VALUES:-----------
    // 1. newState
    // 2. dispatch method (USED TO SPECIFY THE ACTION TO BE TAKEN)
    // ----------------------------------------------------------
    // REDUCER function takes 2 params: (returns 1 entity: value or object or array ... which is formed by state + action, where + is some operation)
    // 1. CURRENT_STATE
    // 2. ACTION (this DICTATES STATE TRANSITION from current state to new state)
    const signIn = function () {
        auth.signInWithPopup(provider)
            .then(function (result) {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }).catch(function (error) {
                alert(error.message);
            })
    }

    const toggle_login = function () {
        setLoginToggle(function (prev_value) {
            return !prev_value
        })
    }

    const login = (
        <div className="login__container">
            <img src={`${logo}`} />
            <div className="login__text">
                <h1>Sign in to React Messaging</h1>
            </div>
            <div className="credentials">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
            </div>

            <Button className="login__button" type="submit">Login</Button><br />
            <span className="other_options">
                <Button onClick={signIn}>Sign in with Google</Button>
                <span style={{ fontSize: "25px", color: "rgb(59,113,129)" }}> | </span>
                <Button onClick={toggle_login}>Register with Email</Button>
            </span>

        </div>
    );

    const signup = (
        <div className="login__container">
            <img src={`${logo}`} />
            <div className="login__text">
                <h1>Create an account</h1>
            </div>
            <div className="credentials">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
            </div>

            <Button className="login__button" type="submit">Signup</Button><br />
            <span className="other_options">
                <Button onClick={signIn}>Sign in with Google</Button>
                <span style={{ fontSize: "25px", color: "rgb(59,113,129)" }}> | </span>
                <Button onClick={toggle_login}>Login with Email</Button>
            </span>

        </div>
    );

    return (
        <div className="login">
            {
                loginToggle ? login : signup
            }
            {/* <Logo /> */}

        </div>
    )
}

export default Login;
