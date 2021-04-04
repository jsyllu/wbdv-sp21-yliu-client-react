import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import quiz_api from '../../services/quiz-service'
import course_api from '../../services/course-service'
import './quizzes-list.style.client.css'
import Helmet from 'react-helmet'

const QuizzesList = () => {
    const {courseId} = useParams()
    const history = useHistory()
    const [course, setCourse] = useState({})
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        course_api.findCourseById(courseId)
            .then((course) => setCourse(course))
        quiz_api.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
        // quiz_api.findQuizzesForCourse(courseId)
        //     .then(quizzes => setQuizzes(quizzes))
    }, [courseId])

    return (
        <>
            <Helmet>
                <title>Quiz
                    {/*for {course.title}*/}
                    | EconStudio</title>
            </Helmet>
            <div className="quizzes-list container">
                <div className="quizzes-header">
                    <button onClick={() => {
                        history.goBack()
                    }}
                            className="float-left">
                        <i className="fas fa-chevron-left fa-2x"></i>
                    </button>
                    <h2>Quizzes for {course.number} {course.title}</h2>
                </div>
                <div className="quizzes">
                    {
                        quizzes.map((q) => {
                            return (
                                <>
                                    <div className="quiz"
                                         key={q._id}>
                                        <div className="row">
                                            <h4>{q.title}</h4>

                                            <Link to={`/courses/${courseId}/quizzes/${q._id}`}>
                                                <button className="btn btn-outline-primary">
                                                    Start
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default QuizzesList