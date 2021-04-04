import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import './questions-list.style.client.css'
import question_api from '../../../services/question-service'
import quiz_api from '../../../services/quiz-service'
import Helmet from 'react-helmet'
import QuestionCard from './question-card'

const QuestionsList = () => {
    const {quizId} = useParams()
    const history = useHistory()
    const [quiz, setQuiz] = useState({})
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        quiz_api.findQuizzesById(quizId)
            .then((quiz) => {
                setQuiz(quiz)
            })
        question_api.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [quizId])

    return (
        <>
            <Helmet>
                <title>Questions
                    {/*for {quiz.title}*/}
                    | EconStudio</title>
            </Helmet>

            <div className="questions-list container">
                <div className="quizzes-header">
                    <button onClick={() => {
                        history.goBack()
                    }}
                            className="float-left">
                        <i className="fas fa-chevron-left fa-2x"></i>
                    </button>
                    <h2>{quiz.title}</h2>
                </div>

                <div className="question-card-group">
                    {
                        questions.map((q) => {
                            return (
                                <QuestionCard question={q}
                                              key={q._id} />
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default QuestionsList