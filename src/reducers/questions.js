import {
    GET_QUESTIONS_SUCCESS,
    CLICK_ANSWER

} from "../constants/Questions";
import {browserHistory} from "react-router";

const initialState = {
    questions: [],
    choice: false
};

export default function questions(state = initialState, action) {

    switch (action.type) {
        case GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload.result.data.questions

            };
        case CLICK_ANSWER:
            for (let i = 0; i < state.questions.length; i++) {
                if (state.questions[i].question == action.payload.question.innerHTML) {
                    for (let j = 0; j < state.questions[i].answers.length; j++) {
                        if (state.questions[i].answers[j].answer == action.payload.answer.innerHTML) {
                            if (state.questions[i].answers[j].value == true) {
                                action.payload.question.parentNode.classList.add("right-answer");
                            } else {
                                action.payload.question.parentNode.classList.add("fail-answer");
                            }
                            break;
                        }
                    }
                    break;
                }
            }
            if (document.getElementsByClassName("questionPage").length ===
                (document.getElementsByClassName("fail-answer").length +
                document.getElementsByClassName("fail-answer").length)) {
                browserHistory.push("/result");
            }
            return {
                ...state
            };
        default:
            return state;
    }

}
