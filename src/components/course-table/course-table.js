import React from 'react'
import './course-table.css'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="course-table">
                <h2>Course Table</h2>
                <div className="btn-group">
                    <button className="create-course-btn fas fa-plus fa-lg"
                            onClick={this.props.addCourse}>
                    </button>
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