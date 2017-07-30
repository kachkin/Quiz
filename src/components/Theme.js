import React, {Component, PropTypes} from "react";
import {browserHistory} from "react-router"
import {Button} from "react-bootstrap"


export default class Theme extends Component{
    handleClickTheme(e){
        var a = e.target.value;
        this.props.clickTheme(a);
        browserHistory.push(`/themes/${a}`);

    }
    render(){
        const {theme} = this.props;
        return(
            <Button className='btnTheme' bsStyle='link' value={theme.value} onClick={this.handleClickTheme.bind(this)}>{theme.name}</Button>
        )
    }
}

Theme.propTypes={
    theme: PropTypes.object.isRequired,
    clickTheme: PropTypes.func.isRequired
};
