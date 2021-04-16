import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import quizActions from '../actions/quiz-actions'
import {connect} from 'react-redux'
import QuizAttemptsList from './questions/quiz-attempts-list'
import Helmet from 'react-helmet'
import './questions/questions-list.style.client.css'
import QuestionsList from './questions/questions-list'

const Quiz = (
    {
        quiz = {},
        questions = [],
        attemptsForQuiz = [],
        findQuiz,
        findQuestionsForQuiz,
        findQuizAttempts,
        submitQuiz
    }) => {

    const {quizId} = useParams()
    const history = useHistory()
    const [showAttemptList, setShowAttemptList] = useState(false)
    const [preview, setPreview] = useState(true)
    const [viewMode, setViewMode] = useState(true)
    const [quizMode, setQuizMode] = useState(false)
    const [localQuestions, setLocalQuestions] = useState([])
    const [submitBtn, setSubmitBtn] = useState('Submit Quiz')
    const [score, setScore] = useState(0)
    const [attemptDate, setAttemptDate] = useState('')

    useEffect(() => {
        if (quiz === {} || quiz._id !== quizId) {
            findQuiz(quizId)
        }
    }, [quizId])

    useEffect(() => {
        setLocalQuestions([...questions])
    }, [questions])

    useEffect(() => {
        if (viewMode) {
            setSubmitBtn('Submitted')
        } else {
            setSubmitBtn('Submit Quiz')
            setScore(0)
        }
    }, [viewMode])

    useEffect(() => {
        if (attemptsForQuiz.length > 0) {
            setScore(attemptsForQuiz[0].score)
            setAttemptDate(attemptsForQuiz[0]._createdAt)
        }
    }, [attemptsForQuiz])

    const startQuiz = () => {
        if (questions === [] || questions.length < 1 || questions[0].quizId !== quizId) {
            findQuestionsForQuiz(quizId)
        }
        setLocalQuestions([...questions])
        setViewMode(false)
        setPreview(false)
        setShowAttemptList(false)
        setQuizMode(true)
    }

    const exitQuiz = () => {
        setPreview(true)
        setViewMode(true)
        setQuizMode(false)
    }

    const viewAttempts = () => {
        if (attemptsForQuiz.length < 1 || attemptsForQuiz[0].quizId !== quizId) {
            findQuizAttempts(quizId)
        }
        setShowAttemptList(true)
        setPreview(false)
        setViewMode(true)
    }

    const exitViewAttempts = () => {
        setShowAttemptList(false)
        setPreview(true)
    }

    const updateAnswer = (index, ans) => {
        let newQuestions = [...localQuestions]
        localQuestions[index].answer = ans
        setLocalQuestions(newQuestions)
    }

    const submitQuizAttempt = () => {
        submitQuiz(quizId, localQuestions)
        setViewMode(true)
    }

    const newQuizAttempt = () => {
        setViewMode(false)
        setLocalQuestions([...questions])
    }

    return (
        <>
            <Helmet>
                <title>
                    {quiz === "undefined" ? '' : quiz.title + ' |'} EconStudio
                </title>
            </Helmet>
            <div className="questions-list container">
                <div className="quizzes-header">
                    <button onClick={() => history.goBack()}
                            className="float-left">
                        <i className="fas fa-chevron-left fa-2x"></i>
                    </button>
                    <h2>{quiz.title}</h2>
                    {
                        preview && quiz.questions !== undefined &&
                        <>
                            <p>
                                {quiz.questions.length} Question
                                {quiz.questions.length % 2 === 0 ? 's' : ''}
                            </p>
                        </>
                    }
                </div>

                {
                    preview &&
                    <>
                        <div className="button-group"
                             style={{display: 'flex', justifyContent: 'center'}}>
                            <button className="btn btn-outline-success"
                                    onClick={() => viewAttempts()}>
                                Attempt History
                            </button>
                            <button className="btn btn-primary"
                                    onClick={() => startQuiz()}>
                                Start Quiz
                            </button>
                        </div>
                    </>
                }
                {
                    showAttemptList &&
                    <QuizAttemptsList attempts={attemptsForQuiz}
                                      exitViewAttempts={exitViewAttempts} />
                }
                {
                    quizMode &&
                    <>
                        <QuestionsList quiz={quiz}
                                       questions={localQuestions}
                                       viewMode={viewMode}
                                       attemptScore={score}
                                       attemptDate={attemptDate}
                                       updateAnswer={updateAnswer} />
                        <div className="button-group">
                            <button className="float-left btn btn-outline-success"
                                    onClick={() => exitQuiz()}>
                                Back
                            </button>
                            <button className={`float-right btn btn${!viewMode ? '-outline' : ''}-primary`}
                                    onClick={() => !viewMode && submitQuizAttempt()}>
                                {submitBtn}
                            </button>
                            {
                                viewMode &&
                                <>
                                    <button className="float-right btn btn-outline-dark"
                                            onClick={() => newQuizAttempt()}>
                                        Try Again
                                    </button>
                                </>
                            }
                        </div>
                    </>
                }
            </div>
        </>
    )
}

const stpm = (state) => ({
    quiz: state.quizReducer.currQuiz,
    questions: state.quizReducer.currQuestions,
    attemptsForQuiz: state.quizReducer.attemptsForQuiz
})

const dtpm = (dispatch) => ({
    findQuiz: (qzid) => quizActions.findQuiz(dispatch, qzid),
    findQuestionsForQuiz: (qzid) => quizActions.findQuestionsForQuiz(dispatch, qzid),
    findQuizAttempts: (qzid) => quizActions.findQuizAttempts(dispatch, qzid),
    submitQuiz: (qzid, questions) => quizActions.submitQuiz(dispatch, qzid, questions)
})

export default connect
(stpm, dtpm)
(Quiz)