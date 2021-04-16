import React from 'react'
import {
    CREATE_QUIZ,
    FIND_QUIZZES_FOR_COURSE,
    FIND_QUIZ_ATTEMPTS,
    SUBMIT_QUIZ,
    FIND_QUIZ, FIND_QUESTIONS_FOR_QUIZ, FIND_ALL_QUIZZES
} from '../components/actions/quiz-actions'

const initialState = {
    quizzes: [
        // insert quiz data
    ],
    currQuiz: {
        // current quiz data
    },
    currQuestions: [
        // question set data for current quiz
    ],
    attemptsForQuiz: [
        // insert attempt data
    ],
    savedAttempt: {
        // insert un-submitted saved attempt data
    }
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_QUIZ:
            return {
                ...state
                // TODO:complete quiz-service
            }
        case FIND_ALL_QUIZZES:
            return {
                ...state,
                quizzes: action.quizzes
            }
        case FIND_QUIZZES_FOR_COURSE:
            return {
                ...state,
                quizzes: action.quizzes
            }
        case FIND_QUIZ:
            return {
                ...state,
                currQuiz: action.quiz
            }
        case FIND_QUESTIONS_FOR_QUIZ:
            return {
                ...state,
                currQuestions: action.questions
            }
        case FIND_QUIZ_ATTEMPTS:
            return {
                ...state,
                attemptsForQuiz: action.attempts.reverse()
            }
        case SUBMIT_QUIZ:
            return {
                ...state,
                attemptsForQuiz: [
                    action.newAttempt,
                    ...state.attemptsForQuiz
                ]
            }
        default:
            return state
    }
}

export default quizReducer