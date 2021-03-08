import React from 'react'
import './course-manager.style.client.css'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Route} from "react-router-dom";
import DeleteCourseDialog from "./delete-course-dialog";
import CourseService from "../services/course-service";
import Helmet from "react-helmet";


class CourseManager extends React.Component {

    state = {
        newCourseTitle: 'New Course Title',
        courses: [
            // insert courses data
        ]
    }

    componentDidMount() {
        // add mock data (only when first start server)
        // this.state.courses.map(c => {
        //     CourseService.createCourse(c)
        //         .then()
        // })

        // mount all courses from server
        CourseService.findAllCourses()
            .then(courses => {
                // sort item in descending order by '_createAt'
                courses.sort((a,b) => new Date(b._createdAt) - new Date(a._createdAt))
                this.setState({courses})
            })
    }

    addCourse = (courseToAdd) => {
        CourseService.createCourse(courseToAdd)
            .then((actualCourse) => {
                // this.state.courses.push(actualCourse)
                this.state.courses.splice(0,0, actualCourse)
                this.setState(this.state)
            })
    }

    deleteCourse = (courseToDelete) => {
        alert("Deleting course " + courseToDelete.number + " - "
            + courseToDelete.title + " - " + courseToDelete.term)
        CourseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== courseToDelete._id)
                }))
            })
    }

    updateCourse = (courseToUpdate) => {
        CourseService.updateCourse(courseToUpdate._id, courseToUpdate)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if (c._id === courseToUpdate._id) {
                            return courseToUpdate
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    saveNewCourse = () => {
        const createAt = new Date() // today's date
        const newCourse = {
            number: 'CS-0000-00',
            title: this.state.newCourseTitle,
            owner: 'Jess Liu',
            term: '2021 Spring',
            lastModified: createAt.toISOString().slice(0,10)
        }
        this.setState({newCourseTitle : 'New Course Title'}) // reset title field
        console.log(newCourse)
        this.addCourse(newCourse)
    }


    render() {
        return (
            <>
            <Helmet>
                <title>EconStudio | Course Manager</title>
            </Helmet>
            <div className="dashboard container">
                <h1>Course Manager (Faculty View)</h1>
                <DeleteCourseDialog/>
                <div className="new-course-title-form">
                    <input className="form-control"
                           type="text"
                           onChange={(e) => this.setState({newCourseTitle: e.target.value})}
                           value={this.state.newCourseTitle} />
                    <button className="fas fa-plus fa-2x"
                            onClick={() => this.saveNewCourse()}></button>
                </div>
                <div className="enroll-card">
                    <Route path="/courses/grid" exact={true}>
                        <CourseGrid addCourse={this.addCourse}
                                    deleteCourse={this.deleteCourse}
                                    updateCourse={this.updateCourse}
                                    courses={this.state.courses} />
                    </Route>
                    <Route path={[
                        "/courses",
                        "/courses/table"]}
                           exact={true}>
                        <CourseTable addCourse={this.addCourse}
                                     deleteCourse={this.deleteCourse}
                                     updateCourse={this.updateCourse}
                                     courses={this.state.courses} />
                    </Route>
                </div>
            </div>
            </>
        )
    }
}


export default CourseManager