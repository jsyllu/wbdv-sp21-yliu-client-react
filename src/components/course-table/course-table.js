import React from 'react'
import './course-table.style.client.css'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        newCourseTitle: 'New Course Title',
        newCourseID: 'CS-0000-00',
        newCourseOwner: 'Jess Liu',
        newCourseTerm: '2021 Spring',
        newCourseDate: '2021-02-22'
    }

    render() {

        const saveNewCourse = () => {
            const newCourse = {
                number: this.state.newCourseID,
                title: this.state.newCourseTitle,
                owner: this.state.newCourseOwner,
                term: this.state.newCourseTerm,
                lastModified: this.state.newCourseDate
            }
            // reset title field
            this.setState({
                newCourseTitle: 'New Course Title',
                newCourseID: 'CS-0000-00',
                newCourseOwner: 'Jess Liu',
                newCourseTerm: '2021 Spring',
                newCourseDate: ''
            })
            console.log(newCourse)
            this.props.addCourse(newCourse)
        }

        return (
            <div className="course-table">
                <div className="btn-group">
                    <button className="fas fa-folder"></button>
                    <button className="fas fa-sort-alpha-up fa-lg"></button>
                    <Link to="/courses/grid">
                        <button className="fas fa-th float-right fa-lg"></button>
                    </Link>
                </div>
                <hr />
                <div class="main-table">
                    <table>
                        <thead>
                        <tr className="form">
                            <th className="priority-1">ID</th>
                            <th className="priority-3">Title</th>
                            <th className="priority-2">Owner</th>
                            <th className="priority-4">Term</th>
                            <th className="priority-5">Last Modified</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                        <tr className="form new-course-form">
                            <th className="priority-1">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.newCourseID}
                                       onChange={(e) => this.setState({newCourseID: e.target.value})} />
                            </th>
                            <th className="priority-3">
                                <input type="text" className="form-control"
                                                              value={this.state.newCourseTitle}
                                                              onChange={(e) => this.setState({newCourseTitle: e.target.value})} />
                            </th>
                            <th className="priority-2">
                                <input type="text" className="form-control"
                                                              value={this.state.newCourseOwner}
                                                              onChange={(e) => this.setState({newCourseOwner: e.target.value})} />
                            </th>
                            <th className="priority-4">
                                <input type="text" className="form-control"
                                       value={this.state.newCourseTerm}
                                       onChange={(e) => this.setState({newCourseTerm: e.target.value})} />
                            </th>
                            <th className="priority-5">
                                <input type="date" className="form-control"
                                       value={this.state.newCourseDate}
                                       onChange={(e) => this.setState({newCourseDate: e.target.value})} />
                            </th>
                            <th>&nbsp;</th>
                            <th>
                                <button className="create-course-btn fas fa-plus fa-2x"
                                        onClick={() => saveNewCourse()}>
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.courses.map((course, ndx) =>
                                <CourseRow
                                    deleteCourse={this.props.deleteCourse}
                                    updateCourse={this.props.updateCourse}
                                    course={course}
                                    key={ndx}
                                />)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CourseTable