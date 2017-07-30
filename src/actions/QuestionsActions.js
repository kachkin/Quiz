import axios from "axios";
import {
    GET_QUESTIONS_REQUEST,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_ERROR,
    CLICK_ANSWER,
    GET_THEMES_REQUEST,
    GET_THEMES_SUCCESS,
    GET_THEMES_ERROR,
    CLICK_THEME
} from "../constants/Questions";

export function getQuestions(theme) {
    var url = "/api/questions/" + theme;
    return (dispatch) => {
        dispatch({
            type: GET_QUESTIONS_REQUEST,
            payload: {}
        });

        axios.get(url, theme)
            .then(result => {
                dispatch({
                    type: GET_QUESTIONS_SUCCESS,
                    payload: {
                        result: result
                    }
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_QUESTIONS_ERROR,
                    payload: {},
                    error: error
                })
            })
    }
}

export function clickAnswer(question, answer) {
    return (dispatch => {
        dispatch({
            type: CLICK_ANSWER,
            payload: {
                question: question,
                answer: answer
            }
        })
    })
}

export function getThemes() {
    var url = "/api/themes/";
    return (dispatch) => {
        dispatch({
            type: GET_THEMES_REQUEST,
            payload: {}
        });
        axios.get(url).then(result => {
            dispatch({
                type: GET_THEMES_SUCCESS,
                payload: {
                    result: result
                }
            })
        }).catch( error => {
            dispatch({
                type: GET_THEMES_ERROR,
                payload:{},
                error: error
            })
        })
    }

}
export function clickTheme(theme) {
    return(dispatch)=>{
        dispatch({
            type:CLICK_THEME,
            theme:theme
        })
    }



}
