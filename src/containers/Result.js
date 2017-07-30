import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as questionsActions from "../actions/QuestionsActions";

class Result extends Component{
    render(){
        return(
            <div>kuku</div>
        )
    }
}

function mapStateToProps(state) {
    return{
        theme: state.theme,
        fail: state.fail,
        right: state.right
    }
}

function mapDispatchToProps(dispatch) {
    return {
        questionsActions: bindActionCreators(questionsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
