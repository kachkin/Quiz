import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ResultPage from "../components/Result";
import * as questionsActions from "../actions/QuestionsActions";

class Result extends Component{
    render(){
        const {theme, fail, right} = this.props;
        return(
            <ResultPage theme={theme} fail={fail} right={right}/>
        )
    }
}

function mapStateToProps(state) {
    return{
        theme: state.questions.theme,
        fail: state.questions.fail,
        right: state.questions.right
    }
}

function mapDispatchToProps(dispatch) {
    return {
        questionsActions: bindActionCreators(questionsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
