import React, {useState} from 'react'
import './course-card.style.client.css'
import {Link} from "react-router-dom";
import DeleteItemDialog from "../util/delete-item-dialog";

const CourseCard = ({course, deleteCourse, updateCourse}) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const [deleteDialog, setDeleteDialog] = useState(false)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
        endEditing()
    }

    // reset input fields
    const endEditing = () => {
        setEditing(false)
        setTitle(course.title)
    }

    return (
        <div className="course-card col-lg-6 col-xl-4">
            <div>

                {
                    editing &&
                        <>
                            <button onClick={() => endEditing()}>
                                <i className="fas fa-times fa-lg"></i>
                            </button>
                            <button onClick={() => saveCourse()}
                                    className="select-course-btn">
                                <i className="fas fa-check fa-lg"></i>
                            </button>
                        </>
                }
                {
                    !editing &&
                        <>
                            <button className=""
                                    onClick={() => setDeleteDialog(true)}>
                                <i className="far fa-trash-alt fa-lg"></i>
                            </button>
                            <button onClick={() => setEditing(true)}
                                    className="select-course-btn">
                                <i className="fas fa-edit fa-lg"></i>
                            </button>
                        </>

                }
            </div>
            <div>
                <figure className="img-caption">
                    <img className="card-img"
                         src={course.img}
                         alt="" />
                    <div className="card-caption">
                        <figcaption className="card-title">
                            {
                                !editing &&
                                <span>{course.title}</span>
                            }
                            {
                                editing &&
                                <input className="form-control"
                                       type="text"
                                       onChange={(e) => setTitle(e.target.value)}
                                       value={title} />
                            }
                        </figcaption>
                        <div className="card-detail">
                            <figcaption>
                                <span>{course.owner}</span>
                            </figcaption>
                            <figcaption>
                                <span>{course.number}&ensp;|&ensp;{course.term}</span>
                            </figcaption>
                            <figcaption>
                                Last modification: {course.lastModified}
                            </figcaption>
                        </div>
                        <figcaption className="go-icon">
                            <Link to={{
                                pathname:`/courses/grid/edit/${course._id}`,
                                course: course
                            }}>
                                <i className="fa fa-chevron-right fa-2x"></i>
                            </Link>
                        </figcaption>
                    </div>
                </figure>
                {
                    deleteDialog &&
                    <DeleteItemDialog
                        item={course}
                        deleteItem={deleteCourse}
                        openDialog={setDeleteDialog}
                    />
                }
            </div>
        </div>
    )
}

export default CourseCard