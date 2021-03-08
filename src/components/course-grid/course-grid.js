import React, {useState} from 'react'
import './course-grid.style.client.css'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, addCourse, deleteCourse, updateCourse}) => {
    const [newCourseTitle, setNewCourseTitle] = useState('New Course Title');

    const saveNewCourse = () => {
        setNewCourseTitle('New Course Title') // reset title field
        const createAt = new Date() // today's date
        const newCourse = {
            number: 'CS-0000-00',
            title: newCourseTitle,
            owner: 'Jess Liu',
            term: '2021 Spring',
            lastModified: createAt.toISOString().slice(0,10)
        }
        console.log(newCourse)
        addCourse(newCourse)
    }

    return (
    <div>
        <div className="btn-group">
            <button className="fas fa-folder"></button>
            <button className="fas fa-sort-alpha-up fa-lg"></button>
            <Link to="/courses/table">
                <button className="fas fa-list fa-lg"></button>
            </Link>
        </div>
        <hr />
        <div className="curr-enroll">
            <div className="row">
                <div className="course-card new-course col-lg-6 col-xl-4">
                    <div>
                        <button style={{color: 'transparent'}}>
                            className="select-course-btn">
                            <i className="fas fa-check fa-lg"></i>
                        </button>
                        <button style={{color: 'transparent'}}>
                            <i className="fas fa-trash-alt fa-lg"></i>
                        </button>
                    </div>
                    <a>
                        <figure className="img-caption">
                            <div className="card-img"></div>
                            <div className="card-caption">
                                <figcaption className="card-title">
                                    <input className="form-control"
                                           type="text"
                                           onChange={(e) => setNewCourseTitle(e.target.value)}
                                           value={newCourseTitle} />
                                </figcaption>
                                <div className="card-detail">
                                    <figcaption>
                                        Jess Liu
                                    </figcaption>
                                </div>
                                <figcaption className="new-icon">
                                    <i className="fa fa-plus fa-2x"
                                       onClick={() => saveNewCourse()}></i>
                                </figcaption>
                            </div>
                        </figure>
                    </a>
                </div>
                {
                    courses.map(course =>
                        <CourseCard course={course}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse} />
                    )
                }
            </div>
        </div>
    </div>
    )}

export default CourseGrid