import axios from "axios";

import {
    REGISTER_USER_ERROR,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    SESSION_AUTH_ERROR,
    SESSION_AUTH_REQUEST,
    SESSION_AUTH_SUCCESS,
    VALIDATION_LOGIN_REGISTRATION,
    VALIDATION_FIRST_NAME_REGISTRATION,
    VALIDATION_PASSWORD_REGISTRATION,
    VALIDATION_LAST_NAME_REGISTRATION,
    CHECK_REPEAT_PASSWORD
} from "../constants/Session";

export function registerUser(user) {
    var url = "/api/register/";
    return (dispatch) => {
        dispatch({
            type: REGISTER_USER_REQUEST
        })
        axios.post(url, user).then(
            () => {
                dispatch({
                    type: REGISTER_USER_SUCCESS
                })
            }
        ).catch((error) => {
            dispatch({
                type: REGISTER_USER_ERROR,
                error: error
            })
        })
    }
}

export function userAuth(login, password) {
    var url = "/api/auth/";

    return (dispatch) => {
        dispatch({
            type: SESSION_AUTH_REQUEST,
            payload: {}
        });
        axios.get(url, {params: {login, password}}).then(result => {
            dispatch({
                type: SESSION_AUTH_SUCCESS,
                payload: {
                    user: result
                }
            })
        }).catch(error => {
            dispatch({
                type: SESSION_AUTH_ERROR,
                error: error
            })
        })
    }
}

export function validateFirstName(value) {
    return (dispatch => {
            dispatch({
                type: VALIDATION_FIRST_NAME_REGISTRATION,
                payload: {
                    value: value
                }
            })
        }
    )
}
export function validateLastName(value) {
    return (dispatch => {
            dispatch({
                type: VALIDATION_LAST_NAME_REGISTRATION,
                payload: {
                    value: value
                }
            })
        }
    )
}
export function validatePassword(value) {
    return (dispatch => {
            dispatch({
                type: VALIDATION_PASSWORD_REGISTRATION,
                payload: {
                    value: value
                }
            })
        }
    )
}
export function validateLogin(value) {
    return (dispatch => {
        dispatch({
            type:VALIDATION_LOGIN_REGISTRATION,
            payload:{
                value:value
            }
        })
    })
}

export function checkRepeatPassword(password, repeatPassword) {
    return(dispatch=>{
        dispatch({
            type: CHECK_REPEAT_PASSWORD,
            payload:{
                password: password,
                repeatPassword: repeatPassword
            }
        })
    })
}