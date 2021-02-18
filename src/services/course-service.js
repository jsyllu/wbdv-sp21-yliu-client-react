const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/001401345/courses';

// GET - find all courses, return array of users stored in the server DB
export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

// POST - create a course and add to server, return new course stored in the server
export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(course)
    })
        .then((response) => response.json())

// DELETE - delete an existing course by user id from the server
export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

// PUT - update an existing course by user id, return status of successful update of course
export const updateCourse = (courseId, course) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(course)
    })
        .then(response => response.json())

const course_api = {
    findAllCourses: findAllCourses,
    createCourse: createCourse,
    deleteCourse: deleteCourse,
    updateCourse: updateCourse
}

export default course_api;