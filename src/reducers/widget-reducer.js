import React from 'react'
import {
    CLEAR_CACHED_WIDGETS,
    CREATE_WIDGET,
    UPDATE_WIDGET,
    DELETE_WIDGET,
    FIND_WIDGET,
    FIND_ALL_WIDGETS,
    FIND_WIDGETS_FOR_TOPIC
} from "../components/actions/widget-actions";

const initialState = {
    widgets: [
        // insert widgets data
    ],
    foundWidget: {}
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    return widget.id !== action.deleteWidget.id;
                })
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.updateWidget.id) {
                        return action.updateWidget
                    } else {
                        return widget
                    }
                })
            }
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        case FIND_WIDGET:
            return {
                foundWidget: action.foundWidget
            }
        case FIND_ALL_WIDGETS:
            return {
                ...state,
                widgets: action.widgets
            }
        case CLEAR_CACHED_WIDGETS:
            return {
                widgets: []
            }
        default:
            return state
    }
}

export default widgetReducer