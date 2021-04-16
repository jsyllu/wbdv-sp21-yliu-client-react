// const NODE_SERVER_URL = 'http://localhost:3001/api'
const NODE_SERVER_URL = 'https://econ-studio-server.herokuapp.com/api'

export const findAllQuestions = () =>
    fetch(`${NODE_SERVER_URL}/questions`)
        .then(res => res.json())

export const findQuestionsForQuiz = (qid) =>
    fetch(`${NODE_SERVER_URL}/quizzes/${qid}/questions`)
        .then(res => res.json())

const question_api = {
    findAllQuestions, findQuestionsForQuiz
}

export default question_api