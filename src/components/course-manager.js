import React from 'react'
import './course-manager.css'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Route} from "react-router-dom";
import CourseService, {findAllCourses, createCourse, deleteCourse, updateCourse} from "../services/course-service";

class CourseManager extends React.Component {

    state = {
        courses: [
            {
                number: "CS-5610-01",
                title: "Web Development",
                owner: "Jose Annunziato",
                term: "2021 Spring",
                lastModified: "02/15/2021",
                img: "https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg"
            }, {
                number: "CS-5610-02",
                title: "Web Development",
                owner: "Jose Annunziato",
                term: "2021 Spring",
                lastModified: "02/10/2021",
                img: "https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg"
            }, {
                number: "CS-5335-01",
                title: "Robotics Science and Systems",
                owner: "Robert Platt",
                term: "2021 Spring",
                lastModified: "02/13/2021",
                img: "https://www.clubitc.ro/wp-content/uploads/2019/10/iStock-966248982.jpg"
            }, {
                number: "CS-5010-01",
                title: "Program Design Paradigm",
                owner: "Clark Freifield",
                term: "2020 Fall",
                lastModified: "12/12/2020",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4PeHxsZ18nKgK85lGs-qWPpXpBeYvyDKyw&usqp=CAU&ec=45774421"
            }, {
                number: "CS-5800-03",
                title: "Algorithms",
                owner: "Emanuelle Viola",
                term: "2020 Fall",
                lastModified: "12/10/2020",
                img: "https://www.crn.com/resources/0263-10e24538a932-582b1d7f148d-1000/ai-artificial-intelligence-mind.jpg"
            }, {
                number: "CS-5200-01",
                title: "Database Management Systems",
                owner: "Martin Schedlbauer",
                term: "2020 Summer",
                lastModified: "08/15/2020",
                img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3245c7e-9aa7-406e-8aed-1ecc566959ec/ddhzc2q-795ee219-a11b-44c1-8db4-5ebd5ab09cc3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzMyNDVjN2UtOWFhNy00MDZlLThhZWQtMWVjYzU2Njk1OWVjXC9kZGh6YzJxLTc5NWVlMjE5LWExMWItNDRjMS04ZGI0LTVlYmQ1YWIwOWNjMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.JdNPYhHrlrdJNWmoPZVyqp1UWq6SIjGOzEkQnGf9PBU"
            }
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
                this.setState({courses})
            })
    }

    addCourse = () => {
        const newCourse = {
            number: "CS-0000-01",
            title: "New Course Title",
            owner: "Jess Liu",
            term: "2021 Spring",
            lastModified: "2021-02-20",
            img: ""
        }
        CourseService.createCourse(newCourse)
            .then((actualCourse) => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
    }

    deleteCourse = (courseToDelete) => {
        alert("Deleting course " + courseToDelete.number + " - "
            + courseToDelete.title + " - " + courseToDelete.term)
        CourseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // courses: this.state.courses.filter(c => c._id !== courseToDelete._id) // bad practice
                // this.state.courses.splice(this.state.courses.indexOf(courseToDelete),1)
                // this.setState(this.state)
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== courseToDelete._id)
                }))
            })
    }

    updateCourse = (courseToUpdate) => {
        console.log(courseToUpdate)
        CourseService.updateCourse(courseToUpdate._id, courseToUpdate)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if (c._id === courseToUpdate._id) {
                            // console.log(courseToUpdate)
                            return courseToUpdate
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    render() {
        return (
            <div className="dashboard container">
                <h1>Course Manager (Faculty View)</h1>
                <div className="enroll-card">
                    {/*<Route path="/courses/grid" component={CourseGrid}></Route>*/}
                    <Route path="/courses/grid" exact={true}>
                        <CourseGrid addCourse={this.addCourse}
                                    deleteCourse={this.deleteCourse}
                                    updateCourse={this.updateCourse}
                                    courses={this.state.courses} />
                    </Route>
                    <Route path={["", "/courses/table"]} exact={true}>
                        <CourseTable addCourse={this.addCourse}
                                     deleteCourse={this.deleteCourse}
                                     updateCourse={this.updateCourse}
                                     courses={this.state.courses} />
                    </Route>
                </div>
            </div>
        )
    }
}


export default CourseManager