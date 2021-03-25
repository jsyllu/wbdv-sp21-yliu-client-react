import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item/editable-item"
import {useParams} from 'react-router-dom'
import lessonActions from "../actions/lesson-actions"
import topicActions from "../actions/topic-actions"
import widgetActions from "../actions/widget-actions";

const LessonTab = (
    {
        lessons = [],
        createLesson,
        updateLesson,
        deleteLesson,
        findLessonsForModule,
        findLesson,
        clearCachedTopics,
        clearCachedWidgets
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams()
    const [newLessonTitle, setNewLessonTitle] = useState("New Lesson")

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
            clearCachedTopics()
            clearCachedWidgets()
        }
    }, [moduleId])

    return (
        <div>
            <ul className="nav nav-tabs"
                role="tablist">
                {lessons.map((lesson) =>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${lesson._id === lessonId ? 'active' : ''}`}
                            aria-current="page">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                item={lesson}
                                key={lesson._id}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                dataType='lesson'/>
                        </a>
                    </li>
                )}
                <li className="nav-item new-lesson">
                    <a className="nav-link">
                        <input type="text"
                               value={newLessonTitle}
                               onChange={(e) =>
                                   setNewLessonTitle(e.target.value)}
                               placeholder="New Title" />
                        <span className="caret">&nbsp;</span>
                        &nbsp;
                        <i onClick={() => {
                            if (moduleId === "undefined" || typeof moduleId === "undefined") {
                                alert("ModuleNotFoundError");
                            } else {
                                createLesson(moduleId, newLessonTitle)
                                setNewLessonTitle("New Lesson")
                            }
                        }} className="fa fa-plus"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons,
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createLesson: (moduleId, lessonTitle) => lessonActions.createLesson(dispatch, moduleId, lessonTitle),
    updateLesson: (newItem) => lessonActions.updateLesson(dispatch, newItem),
    deleteLesson: (itemToDelete) => lessonActions.deleteLesson(dispatch, itemToDelete),
    findLessonsForModule: (moduleId) => lessonActions.findLessonsForModule(dispatch, moduleId),
    findLesson: (lessonId) => lessonActions.findLesson(dispatch, lessonId),
    clearCachedTopics: () => topicActions.clearCachedTopics(dispatch),
    clearCachedWidgets: () => widgetActions.clearCachedWidgets(dispatch)
})

export default connect
(stpm, dtpm)
(LessonTab)