import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Questions from "../components/Questions";
import * as questionsActions from "../actions/QuestionsActions";
import "../styles/App.less";


class App extends Component {

   componentWillMount(){
       this.props.questionsActions.getQuestions(this.props.params.theme)
   }
    /*componentDidUpdate(nextProps){
        if(nextProps.params.theme!==this.props.theme){
            this.props.questionsActions.getQuestions(nextProps.params.theme);
        }
    }*/


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
        end: state.questions.end,
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
