import React from 'react'
import {
    CREATE_TOPIC,
    UPDATE_TOPIC,
    DELETE_TOPIC,
    FIND_TOPIC,
    FIND_TOPICS_FOR_LESSON,
    CLEAR_CACHED_TOPICS
} from "../components/actions/topic-actions";

const initialState = {
    topics: [
        // insert topics data
    ],
    foundTopic: {}
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => {
                    return topic._id !== action.deleteTopic._id;
                })
            }
        case UPDATE_TOPIC:
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if(topic._id === action.updateTopic._id) {
                        return action.updateTopic
                    } else {
                        return topic
                    }
                })
            }
        case FIND_TOPICS_FOR_LESSON:
            return {
                ...state,
                topics: action.topics
            }
        case FIND_TOPIC:
            return {
                foundTopic: action.foundTopic
            }
        case CLEAR_CACHED_TOPICS:
            return {
                topics: []
            }
        default:
            return state
    }
}

export default topicReducer