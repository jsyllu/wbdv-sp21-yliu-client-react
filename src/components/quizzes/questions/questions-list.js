import React from 'react'
import Helmet from 'react-helmet'
import './questions-list.style.client.css'
import QuestionCard from './question-card'

const QuestionsList = (
    {
        quiz = {},
        questions = [],
        viewMode,
        attemptScore,
        attemptDate,
        updateAnswer
    }) => {

    return (
        <>
            <Helmet>
                <title>Questions for {quiz.title} | EconStudio</title>
            </Helmet>

            {
                viewMode &&
                <div className="quiz-attempt-header">
                    <h4>Score: {Number(attemptScore).toFixed(2)}%</h4>
                    <h5>Attempted at {attemptDate}</h5>
                    <hr />
                </div>
            }

            <div className="question-card-group">
                {
                    questions.map((q, index) => {
                        return (
                            <QuestionCard viewMode={viewMode}
                                          question={q}
                                          index={index}
                                          updateAnswer={updateAnswer}
                                          key={q._id} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default QuestionsList