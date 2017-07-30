import React, {PropTypes, Component} from "react";
import Question from "./Question"

import "../styles/Questions.less"

export default class Questions extends Component {
    render() {
        var i = 1;
        const {questions} = this.props;
        return (
            <div className='questionsPage'>
                <div className='questions'>
                    {
                        questions.map(question => {
                                return (
                                    <Question clickAnswer={this.props.clickAnswer} key={(i++)}
                                              question={question.question} answers={question.answers}/>)
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}

Questions.propTypes = {
    clickAnswer: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired
};
