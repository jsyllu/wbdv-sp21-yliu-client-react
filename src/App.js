import Helmet from "react-helmet";
import CourseManager from "./components/course-manager";
import Footer from "./common/footer";
import Header from "./common/header";
import './App.css'
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import CourseEditor from "./components/course-editor/course-editor";
import Home from './components/home/home'

function App() {
    return (
        <div>
            <Helmet>
                <title>EconStudio | Course Manager</title>
            </Helmet>
            <BrowserRouter>
                <Header />
                <Route path="/" exact={true} component={Home}/>
                <Route path="/courses"
                       component={CourseManager} />
                <Route path="/editor"
                       render={(props) => <CourseEditor {...props} />} />
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App