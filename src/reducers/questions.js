import {
    GET_QUESTIONS_SUCCESS,
    CLICK_ANSWER

} from "../constants/Questions";
import {browserHistory} from "react-router";

const initialState = {
    theme:"",
    questions: [],
    choice: false,
    right: 0,
    fail: 0
};

export default function questions(state = initialState, action) {

    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload.result.data.questions,
                theme: action.payload.result.data.value,
                right: 0,
                fail: 0

            };
        case CLICK_ANSWER:
            for (let i = 0; i < state.questions.length; i++) {
                if (state.questions[i].question == action.payload.question.innerHTML) {
                    for (let j = 0; j < state.questions[i].answers.length; j++) {
                        if (state.questions[i].answers[j].answer == action.payload.answer.innerHTML) {
                            if (state.questions[i].answers[j].value == true) {
                                action.payload.question.parentNode.classList.add("right-answer");
                                state.right++;
                            } else {
                                action.payload.question.parentNode.classList.add("fail-answer");
                                state.fail++;
                            }
                            break;
                        }
                    }
                    break;
                }
            }
            if (state.right+state.fail===state.questions.length) {
                browserHistory.push(`/themes/result`);
            }
            return {
                ...state
            };
        default:
            return state;
    }

}
