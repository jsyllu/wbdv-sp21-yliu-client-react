import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom"
import {combineReducers, createStore} from "redux"
import {Provider} from "react-redux"
import Helmet from "react-helmet"
import './course-editor.style.client.css'
import moduleReducer from '../../reducers/module-reducer'
import lessonReducer from "../../reducers/lesson-reducer"
import topicReducer from "../../reducers/topic-reducer"
import widgetReducer from "../../reducers/widget-reducer"
import ModuleList from './module-list'
import LessonTab from "./lesson-tab"
import TopicPill from "./topic-pill"
import WidgetList from "./widget-list"
import courseService from "../../services/course-service"

// const reducers = combineReducers({
//     moduleReducer,
//     lessonReducer,
//     topicReducer,
//     widgetReducer
// })
// const store = createStore(reducers)

const CourseEditor = () => {
    const [course, setCourse] = useState({})
    const {layout, courseId, moduleId} = useParams()

    // edit course info
    const [editing, setEditing] = useState(false)
    const [number, setNumber] = useState(course.number)
    const [title, setTitle] = useState(course.title)
    const [owner, setOwner] = useState(course.owner)
    const [term, setTerm] = useState(course.term)

    // fetch course by courseId
    useEffect(() => {
        courseService.findCourseById(courseId)
            .then((curr) => {
                setCourse(curr)
                // setTitle(curr.title)
                // setOwner(curr.owner)
                // setNumber(curr.number)
                // setTerm(curr.term)
            })
    }, [courseId])


    // update the course info
    const updateCourse = () => {
        const updateCourse = {
            ...course,
            title,
            owner,
            number,
            term
        }
        courseService.updateCourse(courseId, updateCourse)
            .then((updatedCourse) => {
                setCourse(updatedCourse)
            })
        setEditing(false)
        setNumber(course.number)
        setTitle(course.title)
        setOwner(course.owner)
        setTerm(course.term)
    }

    const endEditing = () => {
        setEditing(false)
        setNumber(course.number)
        setTitle(course.title)
        setOwner(course.owner)
        setTerm(course.term)
    }


    return (
        <>
            <Helmet>
                <title>EconStudio | Course Editor</title>
            </Helmet>
            {/*<Provider store={store}>*/}
                <div className="editor container">
                    <h1>Course Editor</h1>
                    <div className="editor-container">
                        <div className="course-info">
                            {/*<h5 className="course-title">*/}
                            {/*    Web Development*/}
                            {/*    /!*{course.title}*!/*/}
                            {/*    <i className="fas fa-pencil-alt fa-sm"></i>*/}
                            {/*</h5>*/}
                            {/*<p className="course-id">*/}
                            {/*    Jose Annunziato*/}
                            {/*    /!*{course.owner}*!/*/}
                            {/*</p>*/}
                            {/*<p className="course-id">*/}
                            {/*    CS-5610-01&ensp;|&ensp;2021 Spring*/}
                            {/*</p>*/}
                            {/*<p className="course-id">*/}
                            {/*    Last Modified: 2021-02-22*/}
                            {/*</p>*/}
                        </div>
                        <div className="editor-header row">
                            <div className="editor-header-title col-4">
                                <Link to={`/courses/${layout}`}>
                                    <button className="back-icon">
                                        <i className="back-icon fa fa-chevron-left fa-2x">
                                        </i>
                                    </button>
                                </Link>
                                <div className="course-info">
                                    {
                                        editing &&
                                        <>
                                            <input type="text"
                                                   className="course-title"
                                                   placeholder={`${course.title !== ""
                                                   && typeof course.title !== "undefined"
                                                   && course.title !== "undefined" ? course.title : 'title'}`}
                                                   value={title}
                                                   onChange={(e) => {
                                                       setTitle(e.target.value)
                                                   }}
                                            />
                                            <input type="text"
                                                   className="course-owner"
                                                   value={owner}
                                                   placeholder={`${course.owner !== ""
                                                   && typeof course.owner !== "undefined"
                                                   && course.owner !== "undefined" ? course.owner : 'owner'}`}
                                                   onChange={(e) => setOwner(e.target.value)}
                                            />
                                            <input type="text"
                                                   value={number}
                                                   className="course-id"
                                                   style={{width: '6rem'}}
                                                   placeholder={`${course.number !== ""
                                                   && typeof course.number !== "undefined"
                                                   && course.number !== "undefined" ? course.number : 'number'}`}
                                                   onChange={(e) => setNumber(e.target.value)}
                                            />
                                            &ensp;|&ensp;
                                            <input type="text"
                                                   value={term}
                                                   className="course-id"
                                                   style={{width: '6rem'}}
                                                   placeholder={`${course.term !== ""
                                                   && typeof course.term !== "undefined"
                                                   && course.term !== "undefined" ? course.term : 'term'}`}
                                                   onChange={(e) => setTerm(e.target.value)}
                                            />
                                            <button onClick={() => updateCourse()}>
                                                <i className="fas fa-check fa-sm"></i>
                                            </button>
                                            &ensp;
                                            <button onClick={() => endEditing()}>
                                                <i className="fas fa-times fa-sm"></i>
                                            </button>
                                        </>
                                    }
                                    {
                                        !editing &&
                                        <>
                                            {
                                                (course.title === "undefined" || typeof course.title === "undefined") &&
                                                <em>loading course...</em>
                                            }
                                            {
                                                (course.title !== "undefined" && typeof course.title !== "undefined") &&
                                                <>
                                                    <h5 className="course-title">
                                                        {course.title}
                                                    </h5>
                                                    <p className="course-id">
                                                        {course.owner}
                                                    </p>
                                                    <p className="course-id">
                                                        {course.number}&ensp;|&ensp;{course.term}&ensp;
                                                        <button onClick={() => setEditing(true)}>
                                                            <i className="fas fa-pencil-alt fa-sm"></i>
                                                        </button>
                                                    </p>
                                                    <Link to={`/courses/${courseId}/quizzes`}>
                                                        <button className="btn btn-outline-primary">
                                                            Quiz
                                                        </button>
                                                    </Link>
                                                </>
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="editor-header-lesson col-8">
                                <LessonTab />
                            </div>
                        </div>

                        <div className="editor-content row">
                            <div className="modules col-4">
                                <ModuleList />
                            </div>
                            <div className="topics col-8">
                                <TopicPill />
                                <div className="topic-btn-group">
                                    {/*<div className="row">*/}
                                    {/*    <button className="btn btn-outline-primary">*/}
                                    {/*        Save*/}
                                    {/*    </button>*/}
                                    {/*    &ensp;*/}
                                    {/*    <div className="topic-preview row">*/}
                                    {/*        <p className="col-6">Preview</p>*/}
                                    {/*        {*/}
                                    {/*            preview &&*/}
                                    {/*            <i className="col-6 fa fa-toggle-on"*/}
                                    {/*               onClick={() => setPreview(false)}></i>*/}
                                    {/*        }*/}
                                    {/*        {*/}
                                    {/*            !preview &&*/}
                                    {/*            <i className="col-6 fa fa-toggle-off"*/}
                                    {/*               onClick={() => setPreview(true)}></i>*/}
                                    {/*        }*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="widget-group container">
                                    <WidgetList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</Provider>*/}
        </>
    )
}

export default CourseEditor