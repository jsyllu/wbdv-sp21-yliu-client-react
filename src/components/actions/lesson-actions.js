import lessonService from "../../services/lesson-service";

export const CREATE_LESSON = "CREATE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE"
export const FIND_LESSON = "FIND_LESSON"
export const CLEAR_CACHED_LESSONS = "CLEAR_CACHED_LESSONS"

export const createLesson = (dispatch, moduleId, lessonTitle) => {
    lessonService.createLesson(moduleId, {title: lessonTitle, type: 'lesson'})
        .then(lesson => dispatch({
            type: CREATE_LESSON,
            newLesson: lesson
        }))
}
export const updateLesson = (dispatch, newItem) => {
    lessonService.updateLesson(newItem._id, newItem)
        .then(status => dispatch({
            type: UPDATE_LESSON,
            updateLesson: newItem
        }))
}
export const deleteLesson = (dispatch, itemToDelete) => {
    lessonService.deleteLesson(itemToDelete._id)
        .then(status => dispatch({
            type: DELETE_LESSON,
            deleteLesson: itemToDelete
        }))
}
export const findLessonsForModule = (dispatch, moduleId) => {
    lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: FIND_LESSONS_FOR_MODULE,
            lessons
        }))
}
export const findLesson = (dispatch, lessonId) => {
    lessonService.findLesson(lessonId)
        .then(foundLesson => dispatch({
            type: FIND_LESSON,
            foundLesson
        }))
}

export const clearCachedLessons = (dispatch) => {
    dispatch({
        type: CLEAR_CACHED_LESSONS
    })
}

const lessonActions = {
    createLesson, updateLesson, deleteLesson, findLessonsForModule, findLesson, clearCachedLessons
}

export default lessonActions