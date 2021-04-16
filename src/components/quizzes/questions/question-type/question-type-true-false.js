import React from 'react'

const QuestionTypeTrueFalse = (
    {
        qid,
        updateAnswer,
        index,
        answer,
        correctAnswer,
        viewMode
    }) => {

    const ANSWER_TRUE = 'true'
    const ANSWER_FALSE = 'false'
    const choices = [ANSWER_TRUE, ANSWER_FALSE]

    const updateTheAnswer = (choice) => {
        updateAnswer(index, choice)
    }

    return (
        <div className="question-choices-group">
            {
                choices.map((choice, index) => {
                    return (
                        <div className={`question-choices-group-item 
                            ${!viewMode ? '' :
                            correctAnswer === choice ? 'selected-right' :
                                answer === choice ? 'selected-wrong' : ''}`}
                             key={index}>
                            <input type="radio"
                                   name={qid}
                                   id={`${qid}-${choice}`}
                                   onClick={() => updateTheAnswer(choice)}
                                   disabled={viewMode} />
                            <label htmlFor={`${qid}-${choice}`}>
                                &nbsp;{choice}
                            </label>
                            <div className="question-grade-icon">
                                {
                                    viewMode && correctAnswer === choice &&
                                    <i className="fas fa-check"></i>
                                }
                                {
                                    viewMode && correctAnswer !== choice && answer === choice &&
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

export default QuestionTypeTrueFalse