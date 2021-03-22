import topicService from "../../services/topic-service";

export const CREATE_TOPIC = "CREATE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"
export const FIND_TOPIC = "FIND_TOPIC"
export const CLEAR_CACHED_TOPICS = "CLEAR_CACHED_TOPICS"

export const createTopic = (dispatch, lessonId, topicTitle) => {
    topicService.createTopic(lessonId, {title: topicTitle, type: 'topic'})
        .then(topic => dispatch({
            type: CREATE_TOPIC,
            newTopic: topic
        }))
}
export const updateTopic = (dispatch, newItem) => {
    topicService.updateTopic(newItem._id, newItem)
        .then(status => dispatch({
            type: UPDATE_TOPIC,
            updateTopic: newItem
        }))
}
export const deleteTopic = (dispatch, itemToDelete) => {
    topicService.deleteTopic(itemToDelete._id)
        .then(status => dispatch({
            type: DELETE_TOPIC,
            deleteTopic: itemToDelete
        }))
}
export const findTopicsForLesson = (dispatch, lessonId) => {
    topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: FIND_TOPICS_FOR_LESSON,
            topics
        }))
}
export const findTopic = (dispatch, topicId) => {
    topicService.findTopic(topicId)
        .then(foundTopic => dispatch({
            type: FIND_TOPIC,
            foundTopic
        }))
}

export const clearCachedTopics = (dispatch) => {
    dispatch({
        type: CLEAR_CACHED_TOPICS
    })
}

const lessonActions = {
    createTopic, updateTopic, deleteTopic, findTopicsForLesson, findTopic, clearCachedTopics
}

export default lessonActions