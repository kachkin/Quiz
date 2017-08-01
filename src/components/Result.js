import React, {Component, PropTypes} from "react";
import {RadialChart} from "react-vis";


export default  class Result extends Component {
    render() {
        const { right, fail} = this.props;
        return <div className='ResultPage'>
            <RadialChart
                width={300}
                height={300}
                data={[
                    {angle: right}, {angle: fail}
            ]}/>
        </div>
    }
}

Result.propTypes = {
    theme: PropTypes.string.isRequired,
    right: PropTypes.number.isRequired,
    fail: PropTypes.number.isRequired
};