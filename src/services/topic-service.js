const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001401345/lessons'
const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001401345/topics'

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(res => res.json());

export const createTopic = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

export const findTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`)
        .then(res => res.json())

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "DELETE"
    })
        .then(res => res.json());

export const updateTopic = (topicId, topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());


const topicApi = {
    createTopic, deleteTopic, updateTopic, findTopicsForLesson, findTopic
}

export default topicApi