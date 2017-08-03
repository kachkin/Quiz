import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getThemes, clickTheme, getQuestions} from "../actions/QuestionsActions";
import ThemesPage from "../components/Themes";
import UserMenu from "../components/UserMenu"

import "../styles/Themes.less";

class Themes extends Component{
    constructor(props){
        super(props);
        this.props.getThemes();
    }
    render(){
        const {themes, lastName, firstName} = this.props;
        const {getQuestions, clickTheme} = this.props;
        return(
            <div>
                <div className='UserMenu'>
                    <UserMenu firstName={firstName} lastName={lastName} userLogOut={getQuestions}/>
                </div>
                <div className='Themes'>
                    <ThemesPage clickTheme={clickTheme} getQuestions={getQuestions} themes={themes} themeParam={!!this.props.params.theme}/>
                </div>
                <div className='content'>{this.props.children}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        themes: state.themes.themes,
        choice: state.questions.choice,
        theme: state.themes.theme,
        login: state.session.login,
        firstName: state.session.userFirstName,
        lastName: state.session.userLastName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getThemes: bindActionCreators(getThemes, dispatch),
        getQuestions: bindActionCreators(getQuestions, dispatch),
        clickTheme: bindActionCreators(clickTheme, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Themes)
