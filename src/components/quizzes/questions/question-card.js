import React, {useState} from 'react'
import './question-card.style.client.css'
import QuestionTypeTrueFalse from './question-type-true-false'
import QuestionTypeMultipleChoice from './question-type-multiple-choice'

const QUESTION_TYPE_TRUE_FALSE = "TRUE_FALSE"
const QUESTION_TYPE_MULTIPLE_CHOICE = "MULTIPLE_CHOICE"

const QuestionCard = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [correct, setCorrect] = useState(null)
    const [gradeBtn, setGradeBtn] = useState('Grade')

    const grade = () => {
        setCorrect(answer === question.correct)
        setGradeBtn('Graded')
    }

    const clearAnswer = () => {
        setCorrect(null)
        setGradeBtn('Grade')
    }

    return (
        <div className="question-card">
            <div className="question-header">
                <h3>
                    {question.question}
                    {
                        correct !== null && correct &&
                        <i className="float-right question-check-mark fas fa-check"></i>
                    }
                    {
                        correct !== null && !correct &&
                        <i className="float-right fas fa-times"></i>
                    }
                </h3>
            </div>
            {
                question.type === QUESTION_TYPE_TRUE_FALSE &&
                <QuestionTypeTrueFalse qid={question._id}
                                       setAnswer={setAnswer}
                                       correctAnswer={question.correct}
                                       correct={correct} />
            }
            {
                question.type === QUESTION_TYPE_MULTIPLE_CHOICE &&
                <QuestionTypeMultipleChoice qid={question._id}
                                            choices={question.choices}
                                            setAnswer={setAnswer}
                                            correctAnswer={question.correct}
                                            correct={correct} />
            }
            <p>You answer: {answer}</p>
            <div className="button-group">
                <button className={`btn btn${correct === null ? '-outline' : ''}-primary`}
                        onClick={() => {
                            if (correct === null) grade()
                        }}>
                    {gradeBtn}
                </button>
                {
                    correct !== null &&
                    <button className="btn btn-outline-dark"
                            onClick={() => clearAnswer()}>Clear</button>
                }
            </div>
        </div>
    )
}

export default QuestionCard