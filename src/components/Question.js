import React, {PropTypes, Component} from "react";

import "../styles/Question.less";

export default class Question extends Component {
    onClickAnswer(e){
        if(e.target.tagName === "SPAN"){
            var question = e.target.parentNode.parentNode.parentNode.firstChild;
            var answer = e.target;
            this.props.clickAnswer(question,answer)
        }
    }

    render() {
        const {question, answers} = this.props;
        return (
            <div className='questionPage' onClick={this.onClickAnswer.bind(this)}>
                <div className='question'>
                    {question}
                </div>
                <div className='answers'>
                    {
                        answers.map(answer =>
                        <p key={Math.random()}>
                            <span>
                                {answer.answer}
                            </span>
                        </p>)
                    }
                </div>
            </div>
        )

    }
}

Question.propTypes = {
    clickAnswer: PropTypes.func.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired
};