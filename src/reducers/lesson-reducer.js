import React from 'react'
import {
    CLEAR_CACHED_LESSONS,
    CREATE_LESSON,
    DELETE_LESSON,
    FIND_LESSON,
    FIND_LESSONS_FOR_MODULE,
    UPDATE_LESSON
} from "../components/actions/lesson-actions";

const initialState = {
    lessons: [
        // insert lessons data
    ],
    foundLesson: {}
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => {
                    return lesson._id !== action.deleteLesson._id;
                })
            }
        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if(lesson._id === action.updateLesson._id) {
                        return action.updateLesson
                    } else {
                        return lesson
                    }
                })
            }
        case FIND_LESSONS_FOR_MODULE:
            return {
                ...state,
                lessons: action.lessons
            }
        case FIND_LESSON:
            return {
                foundLesson: action.foundLesson
            }
        case CLEAR_CACHED_LESSONS:
            return {
                lessons: []
            }
        default:
            return state
    }
}

export default lessonReducer