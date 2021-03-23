import widgetService from "../../services/widget-service";

export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"
export const FIND_WIDGET = "FIND_WIDGET"
export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS"
export const CLEAR_CACHED_WIDGETS = "CLEAR_CACHED_WIDGETS"

export const createWidget = (dispatch, topicId, widget) => {
    widgetService.createWidget(topicId, widget)
        .then(widget => dispatch({
            type: CREATE_WIDGET,
            newWidget: widget
        }))
}
export const updateWidget = (dispatch, newItem) => {
    widgetService.updateWidget(newItem.id, newItem)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            updateWidget: newItem
        }))
}
export const deleteWidget = (dispatch, itemToDelete) => {
    widgetService.deleteWidget(itemToDelete.id)
        .then(status => dispatch({
            type: DELETE_WIDGET,
            deleteWidget: itemToDelete
        }))
}
export const findWidgetsForTopic = (dispatch, widgetId) => {
    widgetService.findWidgetsForTopic(widgetId)
        .then(widgets => dispatch({
            type: FIND_WIDGETS_FOR_TOPIC,
            widgets
        }))
}
export const findWidget = (dispatch, widgetId) => {
    widgetService.findWidgetById(widgetId)
        .then(foundWidget => dispatch({
            type: FIND_WIDGET,
            foundWidget
        }))
}

export const findAllWidgets = (dispatch) => {
    widgetService.findAllWidgets()
        .then(widgets => dispatch({
            type: FIND_ALL_WIDGETS,
            widgets
        }))
}

export const clearCachedWidgets = (dispatch) => {
    dispatch({
        type: CLEAR_CACHED_WIDGETS
    })
}

const widgetActions = {
    createWidget, updateWidget, deleteWidget, findWidget, findAllWidgets, findWidgetsForTopic, clearCachedWidgets
}

export default widgetActions