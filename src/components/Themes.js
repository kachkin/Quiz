import React, {Component, PropTypes} from "react";
import {ButtonGroup} from "react-bootstrap";

import Theme from "./Theme";



export default class Themes extends Component {
    render() {
        const {themes} = this.props;
        const {clickTheme, getQuestions, themeParam} = this.props
        var i=1;
        return (
            <div className='Themes'>
                <ButtonGroup vertical>
                    {
                        themes.map(theme =>
                            <Theme key ={i++} theme={theme} clickTheme={clickTheme} getQuestions={getQuestions} themeParam={themeParam}/>
                        )
                    }
                </ButtonGroup>
            </div>
        )
    }
}

Themes.propTypes = {
    clickTheme: PropTypes.func.isRequired,
    getQuestions: PropTypes.func.isRequired,
    themes: PropTypes.array.isRequired,
    themeParam: PropTypes.bool.isRequired
};