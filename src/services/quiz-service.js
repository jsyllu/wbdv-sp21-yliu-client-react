// const NODE_SERVER_URL = 'http://localhost:3001/api'
const NODE_SERVER_URL = 'https://econ-studio-server.herokuapp.com/api'

export const findAllQuizzes = () =>
    fetch(`${NODE_SERVER_URL}/quizzes`)
        .then(res => res.json())

export const findQuizzesForCourse = (cid) =>
    fetch(`${NODE_SERVER_URL}/courses/${cid}/quizzes`)
        .then(res => res.json())

export const findQuizById = (qid) =>
    fetch(`${NODE_SERVER_URL}/quizzes/${qid}`)
        .then(res => res.json())

export const submitQuiz = (quizId, questions) =>
    fetch(`${NODE_SERVER_URL}/quizzes/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())

export const findAttemptsForQuiz = (quizId) =>
    fetch(`${NODE_SERVER_URL}/quizzes/${quizId}/attempts`)
        .then(res => res.json())

const quiz_api = {
    findAllQuizzes, findQuizzesForCourse, findQuizById, submitQuiz, findAttemptsForQuiz
}

export default quiz_api