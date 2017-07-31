import {combineReducers} from "redux";
import questions from "./questions";
import themes from "./themes";
import session from"./session";

export default combineReducers({
    questions,
    themes,
    session
});
