const TOPICS_URL = 'https://econ-studio-java.herokuapp.com/api/topics'
const WIDGETS_URL = 'https://econ-studio-java.herokuapp.com/api/widgets'

// const TOPICS_URL = 'http://localhost:8080/api/topics'
// const WIDGETS_URL = 'http://localhost:8080/api/widgets'

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(res => res.json());

export const createWidget = (topicId, widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

export const findAllWidgets = () =>
    fetch(`${WIDGETS_URL}`)
        .then(res => res.json())

export const findWidgetById = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`)
        .then(res => res.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(res => res.json());

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/${widgetId}/`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

const widgetApi = {
    createWidget, deleteWidget, updateWidget, findAllWidgets, findWidgetById, findWidgetsForTopic
}

export default widgetApi