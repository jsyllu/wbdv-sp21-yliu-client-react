const NODE_SERVER_URL = 'http://localhost:3001/api'

export const findAllQuizzes = () =>
    fetch(`${NODE_SERVER_URL}/quizzes`)
        .then(res => res.json())

export const findQuizzesForCourse = (cid) =>
    fetch(`${NODE_SERVER_URL}/courses/${cid}/quizzes`)
        .then(res => res.json())

export const findQuizzesById = (qid) =>
    fetch(`${NODE_SERVER_URL}/quizzes/${qid}`)
        .then(res => res.json())

const quiz_api = {
    findAllQuizzes, findQuizzesForCourse, findQuizzesById
}

export default quiz_api