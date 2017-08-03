import axios from "axios";

import {
    REGISTER_USER_ERROR,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    SESSION_AUTH_ERROR,
    SESSION_AUTH_REQUEST,
    SESSION_AUTH_SUCCESS
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
            payload:{}
        });
        axios.get(url, {params:{login, password}}).then(result => {
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