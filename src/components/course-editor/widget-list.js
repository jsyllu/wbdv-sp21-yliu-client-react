import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import widgetActions from "../actions/widget-actions"
import {connect} from "react-redux"
import EditableWidget from "../editable-item/editable-widget"

const WidgetList = (
    {
        widgets = [],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic,
        findAllWidgets,
        findWidget
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    const newHeadingWidget = {
        topicId: topicId,
        type: "HEADING",
        size: 1,
        heading: "New Heading",
        widgetOrder: widgets.length
    }
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])

    return (
        <>
            <div className="widget-preview">
                {
                    preview &&
                    <button onClick={() => setPreview(false)}>
                        Preview
                        <i className="fas fa-toggle-on"
                           onClick={() => setPreview(false)}></i>
                    </button>
                }
                {
                    !preview &&
                    <button onClick={() => setPreview(true)}>
                        Preview
                        <i className="fas fa-toggle-off"></i>
                    </button>
                }
            </div>

            {
                widgets.map((w) =>
                    <EditableWidget widget={w}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    preview={preview}
                                    key={w.id} />
                )
            }
            <div className="new-widget-icon col-2">
                <button>
                    <i className="fa fa-plus-circle fa-3x"
                       onClick={() => {
                           if (topicId === "undefined" || typeof topicId === "undefined") {
                               alert("TopicNotFoundError")
                           } else {
                               createWidget(topicId, newHeadingWidget)
                           }
                       }}></i>
                </button>
            </div>
        </>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId, newWidget) => widgetActions.createWidget(dispatch, topicId, newWidget),
    updateWidget: (newItem) => widgetActions.updateWidget(dispatch, newItem),
    deleteWidget: (itemToDelete) => widgetActions.deleteWidget(dispatch, itemToDelete),
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId),
    findWidget: (widgetId) => widgetActions.findWidget(dispatch, widgetId),
    findAllWidgets: () => widgetActions.findAllWidgets(dispatch)
})

export default connect
(stpm, dtpm)
(WidgetList)