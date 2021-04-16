import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import course_api from '../../services/course-service'
import './quizzes-list.style.client.css'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import quizActions from '../actions/quiz-actions'

const QuizzesList = (
    {
        quizzes,
        findQuizzesForCourse,
        findAllQuizzes
    }) => {

    const {courseId} = useParams()
    const history = useHistory()
    const [course, setCourse] = useState({})

    useEffect(() => {
        course_api.findCourseById(courseId)
            .then((course) => setCourse(course))
        findAllQuizzes()
        // findQuizzesForCourse()
    }, [courseId])

    return (
        <>
            <Helmet>
                <title>
                    Quizzes {course._id === courseId ? 'for ' + course.title : ''} | EconStudio
                </title>
            </Helmet>
            <div className="quizzes-list container">
                <div className="quizzes-header">
                    <button onClick={() => history.goBack()}
                            className="float-left">
                        <i className="fas fa-chevron-left fa-2x"></i>
                    </button>
                    <h2>
                        Quizzes for {course.number} {course.title}
                    </h2>
                </div>
                <div className="quizzes">
                    {
                        quizzes.map((q) => {
                            return (
                                <>
                                    <div className="quiz"
                                         key={q._id}>
                                        <div className="row">
                                            <h4>
                                                {q.title}
                                            </h4>
                                            <Link to={`/courses/${courseId}/quizzes/${q._id}`}>
                                                <button className="btn btn-outline-primary">
                                                    View
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

const stpm = (state) => ({
    quizzes: state.quizReducer.quizzes
})

const dtpm = (dispatch) => ({
    findQuizzesForCourse: (cid) => quizActions.findQuizzesForCourse(dispatch, cid),
    findAllQuizzes: () => quizActions.findAllQuizzes(dispatch)
})

export default connect
(stpm, dtpm)
(QuizzesList)