import React, {useState} from 'react'
import {Link} from "react-router-dom"
import DeleteItemDialog from "../util/delete-item-dialog"

const CourseRow = ({course, deleteCourse, updateCourse}) => {
    const [editing, setEditing] = useState(false)
    const [number, setNumber] = useState(course.number)
    const [title, setTitle] = useState(course.title)
    const [owner, setOwner] = useState(course.owner)
    const [term, setTerm] = useState(course.term)
    const [lastModified, setLastModified] = useState(course.lastModified)

    const [deleteDialog, setDeleteDialog] = useState(false)

    const saveCourse = () => {
        const newCourse = {
            ...course,
            number: number,
            title: title,
            owner: owner,
            term: term,
            lastModified: lastModified
        }
        updateCourse(newCourse)
        endEditing()
    }

    // reset input fields
    const endEditing = () => {
        setEditing(false)
        setNumber(course.number)
        setTitle(course.title)
        setOwner(course.owner)
        setTerm(course.term)
        setLastModified(course.lastModified)
    }

    return (
        <tr>
            <td className="priority-1">
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
                        {course.number}
                    </Link>
                }
                {
                    editing &&
                    <input className="form-control"
                           type="text"
                           onChange={(e) => setNumber(e.target.value)}
                           value={number} />
                }
            </td>
            <td className="priority-3">
                {
                    !editing &&
                    <Link to={{
                        pathname: `/courses/table/edit/${course._id}`,
                        state: {course}
                    }}>
                        <span>{course.title}</span>
                    </Link>
                }
                {
                    editing &&
                    <input className="form-control"
                           type="text"
                           onChange={(e) => setTitle(e.target.value)}
                           value={title} />
                }
            </td>
            <td className="priority-2">
                {
                    !editing &&
                    <span>{course.owner}</span>
                }
                {
                    editing &&
                    <input className="form-control"
                           type="text"
                           onChange={(e) => setOwner(e.target.value)}
                           value={owner} />
                }
            </td>
            <td className="priority-4">
                {
                    !editing &&
                    <span>{course.term}</span>
                }
                {
                    editing &&
                    <input className="form-control"
                           type="text"
                           onChange={(e) => setTerm(e.target.value)}
                           value={term} />
                }
            </td>
            <td className="priority-5">
                {
                    !editing &&
                    <span>{course.lastModified}</span>
                }
                {
                    editing &&
                    <input className="form-control"
                           type="date"
                           onChange={(e) => setLastModified(e.target.value)}
                           value={lastModified} />
                }
            </td>
            <td>
                {
                    editing &&
                    <button onClick={() => endEditing()}
                            className="delete-course-btn">
                        <i className="fas fa-times fa-2x"></i>
                    </button>
                }
                {
                    !editing &&
                    <button className=""
                            onClick={() => setDeleteDialog(true)}>
                        <i className="far fa-trash-alt fa-2x"></i>
                    </button>
                }
            </td>
            <td>
                {
                    editing &&
                    <button onClick={() => saveCourse()}
                            className="select-course-btn">
                        <i className="fas fa-check fa-2x"></i>
                    </button>
                }
                {
                    !editing &&
                    <button onClick={() => setEditing(true)}
                            className="select-course-btn">
                        <i className="fas fa-edit fa-2x"></i>
                    </button>
                }
            </td>
            {
                deleteDialog &&
                <DeleteItemDialog
                    item={course}
                    deleteItem={deleteCourse}
                    openDialog={setDeleteDialog}
                />
            }
        </tr>
    )
}


export default CourseRow