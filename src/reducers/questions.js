import {
    GET_QUESTIONS_SUCCESS,
    CLICK_ANSWER

} from "../constants/Questions";
import {browserHistory} from "react-router";

const initialState = {
    questions: [],
    choice: false,
    right: 0,
    fail: 0,
    end: false
};

export default function questions(state = initialState, action) {

    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload.result.data.questions,
                right:0,
                fail:0

            };
        case CLICK_ANSWER:
            for (let i = 0; i < state.questions.length; i++) {
                if (state.questions[i].question == action.payload.question.innerHTML) {
                    for (let j = 0; j < state.questions[i].answers.length; j++) {
                        if (state.questions[i].answers[j].answer == action.payload.answer.innerHTML) {
                            if (state.questions[i].answers[j].value == true) {
                                action.payload.question.parentNode.style.backgroundColor = "green";
                                state.right++;
                            } else {
                                action.payload.question.parentNode.style.backgroundColor = "red";
                                state.fail++;
                            }
                            action.payload.question.parentNode.style.pointerEvents = "none";
                            break;
                        }
                    }
                    break;
                }
            }
            if (state.right + state.fail === state.questions.length) {
                state.fail=0;
                state.right=0;
                browserHistory.push("/result");
            }
            return {
                ...state
            };
        default:
            return state;
    }

}
