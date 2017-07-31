import {CLICK_THEME, GET_THEMES_SUCCESS} from "../constants/Questions";

const initialState = {
    themes: [],
    theme: "",
    choice:false
};


export default function questions(state = initialState, action) {

    switch (action.type) {
        case GET_THEMES_SUCCESS:

            return {
                ...state, themes: action.payload.result.data
            };
        case CLICK_THEME:
            var questions = document.getElementsByClassName("questionPage");
            for(var i = 0; i<questions.length; i++){
                questions[i].classList.remove("fail-answer");
                questions[i].classList.remove("right-answer");

            }
            return{
                ...state, choice:true, theme:action.theme
            }

        default:
            return state;
    }

}