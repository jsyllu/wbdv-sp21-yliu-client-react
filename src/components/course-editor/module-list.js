import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item/editable-item"
import {useParams} from 'react-router-dom'
import moduleActions from "../actions/module-actions"
import lessonActions from "../actions/lesson-actions"
import topicActions from "../actions/topic-actions"
import widgetActions from "../actions/widget-actions";

const ModuleList = (
    {
        modules = [],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse,
        findModule,
        clearCachedLessons,
        clearCachedTopics,
        clearCachedWidgets
    }) => {
    const {layout, courseId, moduleId} = useParams()
    const [newModuleTitle, setNewModuleTitle] = useState("New Module")

    useEffect(() => {
        if (courseId !== "undefined" && typeof courseId !== "undefined") {
            findModulesForCourse(courseId)
            clearCachedLessons()
            clearCachedTopics()
            clearCachedWidgets()
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
                        item={module}
                        key={module._id} />
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
    createModule: (courseId, moduleTitle) => moduleActions.createModule(dispatch, courseId, moduleTitle),
    updateModule: (newItem) => moduleActions.updateModule(dispatch, newItem),
    deleteModule: (itemToDelete) => moduleActions.deleteModule(dispatch, itemToDelete),
    findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId),
    findModule: (moduleId) => moduleActions.findModule(dispatch, moduleId),
    clearCachedLessons: () => lessonActions.clearCachedLessons(dispatch),
    clearCachedTopics: () => topicActions.clearCachedTopics(dispatch),
    clearCachedWidgets: () => widgetActions.clearCachedWidgets(dispatch)
})

export default connect
(stpm, dtpm)
(ModuleList)