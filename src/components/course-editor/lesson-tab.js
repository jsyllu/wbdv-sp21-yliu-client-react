import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item/editable-item"
import {useParams} from 'react-router-dom'
import lessonService from '../../services/lesson-service'

const LessonTab = (
    {
        lessons = [],
        createLesson,
        updateLesson,
        deleteLesson,
        findLessonsForModule,
        findLesson,
        clearCachedTopics
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams()
    const [newLessonTitle, setNewLessonTitle] = useState("New Lesson")

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
            clearCachedTopics()
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
    createLesson: (moduleId, lessonTitle) => {
        lessonService.createLesson(moduleId,
            {title: lessonTitle, type: 'lesson'})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                newLesson: lesson
            }))
    },
    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                updateLesson: newItem
            }))
    },
    deleteLesson: (itemToDelete) => {
        lessonService.deleteLesson(itemToDelete._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                deleteLesson: itemToDelete
            }))
    },
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons
            }))
    },
    findLesson: (lessonId) => {
        lessonService.findLesson(lessonId)
            .then(foundLesson => dispatch({
                type: "FIND_LESSON",
                foundLesson
            }))
    },
    clearCachedTopics: () => {
        topics: dispatch({
            type: "CLEAR_CACHED_TOPICS"
        })
    }
})

export default connect
(stpm, dtpm)
(LessonTab)