const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001401345/courses';
const MODULES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001401345/modules';

export const findModulesForCourse = (courseID) =>
    fetch(`${COURSES_URL}/${courseID}/modules`)
        .then(res => res.json());

export const createModule = (courseId, module) =>
    fetch(`${COURSES_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

export const findModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`)
        .then(res => res.json())

export const deleteModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "DELETE"
    })
        .then(res => res.json());

export const updateModule = (moduleId, module) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

const moduleApi = {
    createModule, deleteModule, updateModule, findModulesForCourse, findModule
}

export default moduleApi