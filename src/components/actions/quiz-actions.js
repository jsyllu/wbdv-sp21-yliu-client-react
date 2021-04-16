import quiz_api from '../../services/quiz-service'
import question_api from '../../services/question-service'

export const CREATE_QUIZ = "CREATE_QUIZ"
export const FIND_ALL_QUIZZES = 'FIND_ALL_QUIZZES'
export const FIND_QUIZZES_FOR_COURSE = "FIND_QUIZZES_FOR_COURSE"
export const FIND_QUESTIONS_FOR_QUIZ = "FIND_QUESTIONS_FOR_QUIZ"
export const FIND_QUIZ = "FIND_QUIZ"
export const SUBMIT_QUIZ = "SUBMIT_QUIZ"
export const FIND_QUIZ_ATTEMPTS = "FIND_QUIZ_ATTEMPTS"

export const createQuiz = (dispatch, cid, quiz) => {

}
export const findAllQuizzes = (dispatch) => {
    quiz_api.findAllQuizzes()
        .then(quizzes => dispatch({
            type: FIND_ALL_QUIZZES,
            quizzes
        }))
}
export const findQuizzesForCourse = (dispatch, cid) => {
    quiz_api.findQuizzesForCourse(cid)
        .then(quizzes => dispatch({
            type: FIND_QUIZZES_FOR_COURSE,
            quizzes
        }))
}
export const findQuiz = (dispatch, qid) => {
    quiz_api.findQuizById(qid)
        .then(quiz => {
            dispatch({
                type: FIND_QUIZ,
                quiz: quiz
            })
        })
}
export const findQuestionsForQuiz = (dispatch, qzid) => {
    question_api.findQuestionsForQuiz(qzid)
        .then(questions => dispatch({
            type: FIND_QUESTIONS_FOR_QUIZ,
            questions
        }))
}
export const submitQuiz = (dispatch, qzid, questions) => {
    quiz_api.submitQuiz(qzid, questions)
        .then(attempt => dispatch({
            type: SUBMIT_QUIZ,
            newAttempt: attempt
        }))
}
export const findQuizAttempts = (dispatch, qzid) => {
    quiz_api.findAttemptsForQuiz(qzid)
        .then(attempts => dispatch({
            type: FIND_QUIZ_ATTEMPTS,
            attempts
        }))
}

const quizActions = {
    createQuiz, findAllQuizzes, findQuizzesForCourse, findQuestionsForQuiz, submitQuiz, findQuizAttempts, findQuiz
}

export default quizActions