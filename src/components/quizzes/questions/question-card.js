import React from 'react'
import './question-card.style.client.css'
import QuestionTypeTrueFalse from './question-type/question-type-true-false'
import QuestionTypeMultipleChoice from './question-type/question-type-multiple-choice'

const QUESTION_TYPE_TRUE_FALSE = "TRUE_FALSE"
const QUESTION_TYPE_MULTIPLE_CHOICE = "MULTIPLE_CHOICE"

const QuestionCard = (
    {
        viewMode,
        question,
        index,
        updateAnswer
    }) => {

    const correct = question.correct === question.answer
    const answer = question.answer

    return (
        <div className="question-card">
            <div className="question-header">
                <h3>
                    {question.question}
                    {
                        viewMode && correct &&
                        <i className="float-right question-check-mark fas fa-check"></i>
                    }
                    {
                        viewMode && !correct &&
                        <i className="float-right fas fa-times"></i>
                    }
                </h3>
            </div>
            {
                question.type === QUESTION_TYPE_TRUE_FALSE &&
                <QuestionTypeTrueFalse qid={question._id}
                                       updateAnswer={updateAnswer}
                                       index={index}
                                       answer={answer}
                                       correctAnswer={question.correct}
                                       viewMode={viewMode} />
            }
            {
                question.type === QUESTION_TYPE_MULTIPLE_CHOICE &&
                <QuestionTypeMultipleChoice qid={question._id}
                                            choices={question.choices}
                                            updateAnswer={updateAnswer}
                                            index={index}
                                            answer={answer}
                                            correctAnswer={question.correct}
                                            viewMode={viewMode} />
            }
            <p>You answer: <u>{answer}</u></p>
        </div>
    )
}

export default QuestionCard