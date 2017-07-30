import {combineReducers} from "redux";
import questions from "./questions";
import themes from "./themes";

export default combineReducers({
    questions,
    themes
});
