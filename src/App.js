import React from 'react'
import Helmet from "react-helmet"
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router-dom"
import {combineReducers, createStore} from 'redux'
import './App.style.client.css'
import CourseManager from "./components/course-manager"
import Footer from "./common/footer"
import Header from "./common/header"
import CourseEditor from "./components/course-editor/course-editor"
import Home from './components/home/home'
import QuizzesList from './components/quizzes/quizzes-list'
import Quiz from './components/quizzes/quiz'
import moduleReducer from './reducers/module-reducer'
import lessonReducer from './reducers/lesson-reducer'
import topicReducer from './reducers/topic-reducer'
import widgetReducer from './reducers/widget-reducer'
import quizReducer from './reducers/quiz-reducer'

const reducers = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer,
    widgetReducer,
    quizReducer
})
const store = createStore(reducers)

function App() {
    return (
        <div>
            <Helmet>
                <title>EconStudio</title>
            </Helmet>
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Route path="/"
                           exact={true}
                           component={Home} />
                    <Route path={["/courses/:layout"]}
                           exact={true}
                           component={CourseManager} />
                    <Route path={[
                        "/courses/:layout/edit/:courseId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                    ]}
                           exact={true}
                           render={(props) => <CourseEditor {...props} />} />
                    <Route path="/courses/:courseId/quizzes"
                           exact={true}
                           component={QuizzesList} />
                    <Route path="/courses/:courseId/quizzes/:quizId"
                           exact={true}
                           component={Quiz} />
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App