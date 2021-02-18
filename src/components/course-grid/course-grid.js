import React from 'react'
import './course-grid.css'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, addCourse, deleteCourse, updateCourse}) =>
    <div>
        <h2>Course Grid {courses.length}</h2>
        <div className="btn-group">
            <button className="fas fa-plus fa-lg" onClick={addCourse}></button>
            <button className="fas fa-sort-alpha-up fa-lg"></button>
            <Link to="/courses/table">
                <button className="fas fa-list fa-lg"></button>
            </Link>
        </div>
        <hr />
        <div className="curr-enroll">
            <div className="row">
                {
                    courses.map(course =>
                        <CourseCard course={course}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse} />
                    )
                }
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
                                    New Course Title
                                </figcaption>
                                <div className="card-detail">
                                    <figcaption>
                                        Jess Liu
                                    </figcaption>
                                </div>
                                <figcaption className="new-icon">
                                    <i className="fa fa-plus fa-2x"
                                       onClick={() => addCourse()}></i>
                                </figcaption>
                            </div>
                        </figure>
                    </a>
                </div>
            </div>
        </div>
    </div>


export default CourseGrid