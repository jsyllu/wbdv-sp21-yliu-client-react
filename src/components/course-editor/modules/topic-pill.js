import React, {useEffect, useState} from 'react'
import {connect, Provider} from 'react-redux'
import EditableItem from "../../editable-item/editable-item"
import {useParams} from 'react-router-dom'
import topicService from '../../../services/topic-service'

const TopicPill = (
    {
        topics = [],
        createTopic,
        updateTopic,
        deleteTopic,
        findTopicsForLesson
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    const [newTopicTitle, setNewTopicTitle] = useState("New Topic")

    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
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
    createTopic: (lessonId, topicTitle) => {
        topicService.createTopic(lessonId, {title: topicTitle})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                newTopic: topic
            }))
    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                updateTopic: newItem
            }))
    },
    deleteTopic: (itemToDelete) => {
        topicService.deleteTopic(itemToDelete._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                deleteTopic: itemToDelete
            }))
    },
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics
            }))
    },
    findTopic: (topicId) => {
        topicService.findTopic(topicId)
            .then(foundTopic => dispatch({
                type: "FIND_TOPIC",
                foundTopic
            }))
    }
})

export default connect
(stpm, dtpm)
(TopicPill)