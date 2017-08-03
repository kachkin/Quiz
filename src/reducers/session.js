import {
    REGISTER_USER_SUCCESS,
    SESSION_AUTH_SUCCESS,
    VALIDATION_LOGIN_REGISTRATION,
    VALIDATION_FIRST_NAME_REGISTRATION,
    VALIDATION_PASSWORD_REGISTRATION,
    VALIDATION_LAST_NAME_REGISTRATION,
    CHECK_REPEAT_PASSWORD

} from "../constants/Session";
import validator from "validator";
const initialState = {
    userFirstName: "",
    userLastName: "",
    login: "",
    teacher: false,
    validation: {
        lastName: false,
        firstName: false,
        password: false,
        login: false,
        repeat: false
    }
};

export default function session(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {
                ...state
            };
        case SESSION_AUTH_SUCCESS:
            if (!action.payload.user.data.login) {
                document.getElementById("error-login").innerHTML = "Incorrect login or password"
            }
            return {
                ...state,
                userFirstName: action.payload.user.data.firstName,
                userLastName: action.payload.user.data.lastName,
                login: action.payload.user.data.login,
                teacher: action.payload.user.data.teacher
            };
        case VALIDATION_FIRST_NAME_REGISTRATION:
            let firsName = action.payload.value;
            if ((validator.isAlpha(firsName, "ru-RU") || validator.isAlpha(firsName)) && validator.isLength(firsName, {min: 3})) {
                state.validation.firstName = true;
            } else state.validation.firstName = false;
            return {
                ...state
            };
        case VALIDATION_LAST_NAME_REGISTRATION:
            let lastName = action.payload.value;
            if ((validator.isAlpha(lastName, "ru-RU") || validator.isAlpha(lastName)) && validator.isLength(lastName, {min: 3})) {
                state.validation.lastName = true;
            } else state.validation.lastName = false;
            return {
                ...state
            };
        case VALIDATION_PASSWORD_REGISTRATION:
            let password = action.payload.value;
            if ((/\D\d/.test(password)) && validator.isLength(password, {min: 6})) {
                state.validation.password = true;
            } else state.validation.password = false;
            return {
                ...state
            };
        case VALIDATION_LOGIN_REGISTRATION:
            let login = action.payload.value;
            if ((/\w/.test(login)) && !(/[аА-яЯ]/.test(login))) {
                state.validation.login = true;
            } else state.validation.login = false;
            return {
                ...state
            };
        case CHECK_REPEAT_PASSWORD:
            if (action.payload.password === action.payload.repeatPassword) {
                state.validation.repeat = true;
            } else state.validation.repeat = false;
            return {
                ...state
            };
        default:
            return state

    }
}