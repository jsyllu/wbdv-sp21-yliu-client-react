import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import widgetActions from "../actions/widget-actions"
import {connect} from "react-redux"
import EditableWidget from "./widgets/editable-widget"

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
    const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams()
    const [newHeadingWidget] = useState({
        topicId: topicId,
        type: "HEADING",
        size: 1,
        heading: "New Heading",
        widgetOrder: widgets.length
    })
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])

    return (
        <>
            <div className="topic-preview row float-right">
                <p className="col-6">Preview</p>
                {
                    preview &&
                    <i className="col-6 fa fa-toggle-on"
                       onClick={() => setPreview(false)}></i>
                }
                {
                    !preview &&
                    <i className="col-6 fa fa-toggle-off"
                       onClick={() => setPreview(true)}></i>
                }
            </div>

            <p>{widgets.length} widgets</p>

            {
                widgets.map(w =>
                    <EditableWidget widget={w}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    preview={preview} />
                )
            }

            {/*{*/}
            {/*    preview &&*/}
            {/*    <div className="widget-preview">*/}
            {/*        <h4>Preview</h4>*/}
            {/*        <h1>Heading Text</h1>*/}
            {/*    </div>*/}
            {/*}*/}

            <div className="new-widget-icon col-2">
                <button>
                    <i className="fa fa-plus-circle fa-3x"
                       onClick={() => {
                           if (topicId === "undefined" || typeof topicId === "undefined") {
                               alert("TopicNotFoundError")
                           } else {
                               console.log(newHeadingWidget)
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