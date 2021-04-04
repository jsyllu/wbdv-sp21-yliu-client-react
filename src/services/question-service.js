const NODE_SERVER_URL = 'http://localhost:3001/api'

export const findAllQuestions = () =>
    fetch(`${NODE_SERVER_URL}/questions`)
        .then(res => res.json())

export const findQuestionsForQuiz = (qid) =>
    fetch(`${NODE_SERVER_URL}/quizzes/${qid}/questions`)
        .then(res => res.json())

const quiz_api = {
    findAllQuestions, findQuestionsForQuiz
}

export default quiz_api