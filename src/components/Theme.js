import React, {Component, PropTypes} from "react";
import {browserHistory} from "react-router"
import {Button} from "react-bootstrap"


export default class Theme extends Component{
    handleClickTheme(e){
        var theme = e.target.value;
        this.props.clickTheme(theme);
        this.props.getQuestions(theme, this.props.themeParam);
        browserHistory.push(`/themes/questions/${theme}`);

    }
    render(){
        const {theme} = this.props;
        return(
            <Button bsStyle='primary' value={theme.value} onClick={this.handleClickTheme.bind(this)}>{theme.name}</Button>
        )
    }
}

Theme.propTypes={
    theme: PropTypes.object.isRequired,
    clickTheme: PropTypes.func.isRequired,
    getQuestions: PropTypes.func.isRequired,
    themeParam: PropTypes.bool.isRequired
};
