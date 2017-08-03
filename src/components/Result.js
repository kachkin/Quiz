import React, {Component, PropTypes} from "react";
import {RadialChart} from "react-vis";

import "../styles/Result.less"


export default  class Result extends Component {
    componentDidMount(){
        document.getElementsByClassName("rv-xy-plot")[0].style.width=0;
    }
    render() {
        const { right, fail} = this.props;
        return <div className='ResultPage'>
            <RadialChart
                width={300}
                height={300}
                data={[
                    {angle: right, style:{fill: "#32CD32", stroke: null} }, {angle: fail, style:{fill: "#B22222",stroke: null}}
            ]}/>
        </div>
    }
}

Result.propTypes = {
    theme: PropTypes.string.isRequired,
    right: PropTypes.number.isRequired,
    fail: PropTypes.number.isRequired
};