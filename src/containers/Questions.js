import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Questions from "../components/Questions";
import * as questionsActions from "../actions/QuestionsActions";
import "../styles/Questions.less";


class App extends Component {

    constructor(props) {
        super(props);
        if(this.props.theme.length === 0) {
            this.props.questionsActions.getQuestions(this.props.params.theme, !this.props.params.theme);
        }
    }

    render() {
        const {questions} = this.props;
        const {clickAnswer} = this.props.questionsActions;
        return (<div className='row'>
            <Questions clickAnswer={clickAnswer} questions={questions}/>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions.questions,
        theme: state.themes.theme
    }
}

function mapDispatchToProps(dispatch) {
    return {
        questionsActions: bindActionCreators(questionsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
