import Helmet from "react-helmet"
import CourseManager from "./components/course-manager"
import Footer from "./common/footer"
import Header from "./common/header"
import './App.style.client.css'
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router-dom"
import CourseEditor from "./components/course-editor/course-editor"
import Home from './components/home/home'
import QuizzesList from './components/quizzes/quizzes-list'
import QuestionsList from './components/quizzes/questions/questions-list'

function App() {
    return (
        <div>
            <Helmet>
                <title>EconStudio</title>
            </Helmet>
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
                       component={QuestionsList} />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App