import React, {useEffect, useState} from 'react'
import {connect, Provider} from 'react-redux'
import EditableItem from "../../editable-item/editable-item"
import {useParams} from 'react-router-dom'
import moduleService from '../../../services/module-service'

const ModuleList = (
    {
        modules = [],
        lessons = [],
        topics =[],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse,
        findModule,
        clearCachedLessons,
        clearCachedTopics
    }) => {
    const {layout, courseId, moduleId} = useParams()
    const [newModuleTitle, setNewModuleTitle] = useState("New Module")

    // console.log(this.props.location.pathname)

    useEffect(() => {
        if (courseId !== "undefined" && typeof courseId !== "undefined") {
            findModulesForCourse(courseId)
            clearCachedLessons()
            clearCachedTopics()
        }
    }, [courseId])

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item"
                    style={{fontSize: '20px'}}>
                    Modules
                </li>
                {modules.map((module, index) =>
                    <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                        {index + 1} - <EditableItem
                        to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                        updateItem={updateModule}
                        deleteItem={deleteModule}
                        item={module} />
                    </li>
                )}

                <li className="list-group-item">
                    <div className="new-module-input row">
                        <span className="">
                            {modules.length + 1} -&ensp;
                        </span>
                        <input type="text"
                               value={newModuleTitle}
                               onChange={(e) =>
                                   setNewModuleTitle(e.target.value)}
                               placeholder="New Title" />
                        <i onClick={() => {
                            if (courseId === "undefined" || typeof courseId === "undefined") {
                                alert("CourseNotFoundError")
                            } else {
                                createModule(courseId, newModuleTitle)
                                setNewModuleTitle("New Module")
                            }
                        }} className="fa fa-plus"></i>
                    </div>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    modules: state.moduleReducer.modules,
    lessons: state.lessonReducer.lessons,
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createModule: (courseId, moduleTitle) => {
        moduleService.createModule(courseId, {title: moduleTitle})
            .then(module => dispatch({
                type: "CREATE_MODULE",
                newModule: module
            }))
    },
    updateModule: (newItem) => {
        console.log("update module to" + newItem.title)
        moduleService.updateModule(newItem._id, newItem)
            .then(status => dispatch({
                type: "UPDATE_MODULE",
                updateModule: newItem
            }))
    },
    deleteModule: (itemToDelete) => {
        moduleService.deleteModule(itemToDelete._id)
            .then(status => dispatch({
                type: "DELETE_MODULE",
                deleteModule: itemToDelete
            }))
    },
    findModulesForCourse: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(modules => dispatch({
                type: "FIND_MODULES_FOR_COURSE",
                modules: modules
            }))
    },
    findModule: (moduleId) => {
        moduleService.findModule(moduleId)
            .then(foundModule => dispatch({
                type: "FIND_MODULE",
                foundModule: foundModule
            }))
    },
    clearCachedLessons: () => {
        lessons: dispatch({
            type: "CLEAR_CACHED_LESSONS"
        })
    },
    clearCachedTopics: () => {
        topics: dispatch({
            type: "CLEAR_CACHED_TOPICS"
        })
    }
})

export default connect
(stpm, dtpm)
(ModuleList)