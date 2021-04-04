import React, {useState} from 'react'

const QuestionTypeMultipleChoice = ({qid, choices, setAnswer, correct, correctAnswer}) => {
    const [ans, setAns] = useState('')

    const setTheAnswer = (ans) => {
        setAns(ans)
        setAnswer(ans)
    }

    return (
        <div className="question-choices-group">
            {
                choices.map((choice, index) => {
                    return (
                        <div className={`question-choices-group-item 
                            ${correct === null ? '' :
                            correctAnswer === choice ? 'selected-right' :
                                ans === choice ? 'selected-wrong' : ''}`}
                             key={index}>
                            <input type="radio"
                                   name={qid}
                                   id={choice}
                                   onClick={() => setTheAnswer(choice)}
                                   disabled={correct !== null} />
                            <label htmlFor={choice}>
                                &nbsp;{choice}
                            </label>
                            <div className="question-grade-icon">
                                {
                                    correct !== null && correctAnswer === choice &&
                                    <i className="fas fa-check"></i>
                                }
                                {
                                    correct !== null && correctAnswer !== choice && ans === choice &&
                                    <i className="fas fa-times"></i>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuestionTypeMultipleChoice