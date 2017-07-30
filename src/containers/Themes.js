import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getThemes, clickTheme} from "../actions/QuestionsActions";
import ThemesPage from "../components/Themes";

import "../styles/Themes.less";

class Themes extends Component{
    constructor(props){
        super(props);
        this.props.getThemes();
    }
    render(){
        const {themes} = this.props;
        return(
            <div>
                <div className='Themes'>
                    <ThemesPage clickTheme={this.props.clickTheme} themes={themes}/>
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
        theme: state.themes.theme
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getThemes: bindActionCreators(getThemes, dispatch),
        clickTheme: bindActionCreators(clickTheme, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Themes)
