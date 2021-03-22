import moduleService from "../../services/module-service";

export const CREATE_MODULE = "CREATE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"
export const FIND_MODULE = "FIND_MODULE"

export const createModule = (dispatch, courseId, moduleTitle) => {
    moduleService.createModule(courseId, {title: moduleTitle, type: 'module'})
        .then(module => dispatch({
            type: CREATE_MODULE,
            newModule: module
        }))
}
export const updateModule = (dispatch, newItem) => {
    moduleService.updateModule(newItem._id, newItem)
        .then(status => dispatch({
            type: UPDATE_MODULE,
            updateModule: newItem
        }))
}
export const deleteModule = (dispatch, itemToDelete) => {
    moduleService.deleteModule(itemToDelete._id)
        .then(status => dispatch({
            type: DELETE_MODULE,
            deleteModule: itemToDelete
        }))
}
export const findModulesForCourse = (dispatch, courseId) => {
    moduleService.findModulesForCourse(courseId)
        .then(modules => dispatch({
            type: FIND_MODULES_FOR_COURSE,
            modules: modules
        }))
}
export const findModule = (dispatch, moduleId) => {
    moduleService.findModule(moduleId)
        .then(foundModule => dispatch({
            type: FIND_MODULE,
            foundModule: foundModule
        }))
}

const moduleActions = {
    createModule, findModule, findModulesForCourse, updateModule, deleteModule
}

export default moduleActions