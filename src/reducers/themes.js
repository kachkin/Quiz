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

            return{
                ...state, choice:true, theme:action.theme
            }

        default:
            return state;
    }

}