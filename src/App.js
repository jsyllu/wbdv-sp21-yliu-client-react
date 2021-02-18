import Helmet from "react-helmet";
import CourseManager from "./components/course-manager";
import Footer from "./common/footer";
import Header from "./common/header";
import './App.css'
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import CourseEditor from "./components/course-editor/course-editor";

function App() {
    return (
        <div>
            <Helmet>
                <title>EconStudio | Course Manager</title>
            </Helmet>
            <Header />
            <BrowserRouter>
                <Route path="/courses"
                       component={CourseManager} />
                <Route path="/editor"
                       render={(props) => <CourseEditor {...props} />} />
                <Footer />

            </BrowserRouter>
        </div>
    );
}

export default App