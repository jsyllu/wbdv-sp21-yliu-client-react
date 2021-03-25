import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item/editable-item"
import {useParams} from 'react-router-dom'
import topicActions from "../actions/topic-actions"
import widgetActions from "../actions/widget-actions";

const TopicPill = (
    {
        topics = [],
        createTopic,
        updateTopic,
        deleteTopic,
        findTopic,
        findTopicsForLesson,
        clearCachedWidgets
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    const [newTopicTitle, setNewTopicTitle] = useState("New Topic")

    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
            clearCachedWidgets()
        }
    }, [lessonId])

    return (
        <div>
            <ul className="nav nav-pills">
                {topics.map((topic) =>
                    <li className="nav-item">
                        <a className={`nav-link ${topic._id === topicId ? 'active' : ''}`}
                           aria-current="page">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic}
                                key={topic._id}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic} />
                        </a>
                    </li>
                )}
                <li className="nav-item new-topic">
                    <a className="nav-link">
                        <input type="text"
                               value={newTopicTitle}
                               onChange={(e) =>
                                   setNewTopicTitle(e.target.value)}
                               placeholder="New Title" />
                        <span className="caret">&nbsp;</span>
                        &nbsp;
                        <i onClick={() => {
                            if (lessonId === "undefined" || typeof lessonId === "undefined") {
                                alert("LessonNotFoundError")
                            } else {
                                createTopic(lessonId, newTopicTitle)
                                setNewTopicTitle("New Topic")
                            }
                        }} className="fa fa-plus"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createTopic: (lessonId, topicTitle) => topicActions.createTopic(dispatch, lessonId, topicTitle),
    updateTopic: (newItem) => topicActions.updateTopic(dispatch, newItem),
    deleteTopic: (itemToDelete) =>  topicActions.deleteTopic(dispatch, itemToDelete),
    findTopicsForLesson: (lessonId) => topicActions.findTopicsForLesson(dispatch, lessonId),
    findTopic: (topicId) => topicActions.findTopic(dispatch, topicId),
    clearCachedWidgets: () => widgetActions.clearCachedWidgets(dispatch)
})

export default connect
(stpm, dtpm)
(TopicPill)