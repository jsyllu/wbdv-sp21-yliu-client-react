const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001401345/modules';
const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001401345/lessons';

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(res => res.json());

export const createLesson = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

export const findLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`)
        .then(res => res.json())

export const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
        method: "DELETE"
    })
        .then(res => res.json());

export const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());


const lessonApi = {
    createLesson, deleteLesson, updateLesson, findLessonsForModule, findLesson
}

export default lessonApi