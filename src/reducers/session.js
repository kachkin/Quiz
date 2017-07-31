import {
    REGISTER_USER_SUCCESS,
    SESSION_AUTH_SUCCESS
} from "../constants/Session";

const initialState = {
    userFirstName: "",
    userLastName: "",
    login: "",
    teacher: false
};

export default function session(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {
                ...state
            }
        case SESSION_AUTH_SUCCESS:
            return {
                ...state,
                userFirstName: action.payload.user.firstName,
                userLastName: action.payload.user.lastName,
                login: action.payload.user.login,
                teacher: action.payload.user.teacher
            }
        default:
            return state

    }
}