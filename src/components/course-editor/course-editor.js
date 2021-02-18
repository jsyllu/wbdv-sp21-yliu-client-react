import React from 'react'
import './course-editor.css'

const CourseEditor = ({history}) =>
    <div className="editor container">
        <h1>Course Editor</h1>
        <div className="editor-container">
            <div className="editor-header row">
                <div className="editor-header-title col-4">
                    <button className="back-icon"
                            onClick={() => history.goBack()}>
                        <i className="back-icon fa fa-chevron-left fa-2x"></i>
                    </button>
                    <div className="course-info">
                        <h5 className="course-title">
                            Web Development
                            <i className="fa fa-pencil"></i>
                        </h5>
                        <p className="course-id">
                            CS-5610-01&ensp;|&ensp;2021 Spring
                        </p>
                    </div>
                </div>
                <div className="editor-header-lesson col-8">
                    <ul className="nav nav-tabs"
                        role="tablist">
                        <li className="nav-item">
                            <button
                                className="nav-link">
                                Build
                                <i className="fa fa-times"></i>
                            </button>
                        </li>
                        <li className="nav-item">
                            <a href="#"
                               className="nav-link active"
                               aria-current="page">
                                Pages
                                <i className="fa fa-times"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Theme
                                <i className="fa fa-times"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Store
                                <i className="fa fa-times"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Apps
                                <i className="fa fa-times"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Settings
                                <i className="fa fa-times"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="editor-content row">
                <div className="modules col-4">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Module 1 - jQuery
                            <i className="fa fa-times"></i>
                        </li>
                        <li className="list-group-item active">
                            Module 2 - React
                            <i className="fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            Module 3 - Redux
                            <i className="fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            Module 4 - Native
                            <i className="fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            Module 5 - Angular
                            <i className="fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            Module 6 - Node
                            <i className="fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            Module 7 - Mongo
                            <i className="fa fa-times"></i>
                        </li>
                        <li className="list-group-item">
                            <input type="text"
                                   value="Module 8 - New Title"
                                   placeholder="New Title" />
                            <i className="fa fa-plus"></i>
                        </li>
                    </ul>
                </div>

                <div className="topics col-8">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="#"
                               className="nav-link active">
                                Topic 1
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#"
                               className="nav-link">
                                Topic 2
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#"
                               className="nav-link">
                                Topic 3
                            </a>
                        </li>
                        <li className="nav-item new-topic">
                            <a href="#"
                               className="nav-link">
                                <i className="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="topic-btn-group">
                        <div className="row">
                            <button className="btn btn-outline-primary">
                                Save
                            </button>
                            <div className="topic-preview row">
                                <p className="col-6">Preview</p>
                                <i className="col-6 fa fa-toggle-off"></i>
                                <i className="col-6 fa fa-toggle-on d-none"></i>
                            </div>
                        </div>
                    </div>
                    <div className="widget-group container">
                        <div className="widget">
                            <div className="widget-header">
                                <div className="row">
                                    <h3 className="widget-type-title">
                                        Heading Widget
                                    </h3>
                                    <div className="widget-header-right">
                                        <button className="widget-position-icon">
                                            <i className="fa fa-chevron-up fa-lg"></i>
                                        </button>
                                        <button class="widget-position-icon">
                                            <i className="fa fa-chevron-down fa-lg"></i>
                                        </button>
                                        <select className="widget-type-select">
                                            <option value="heading" selected>Heading</option>
                                            <option value="text">Text</option>
                                            <option value="image">Image</option>
                                            <option value="video">Video</option>
                                            <option value="file">File</option>
                                            <option value="url">Url</option>
                                        </select>
                                        <button className="widget-delete-icon">
                                            <i className="fa fa-times fa-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <input className="widget-content" type="text" value="Heading text"
                                   placeholder="widget content" />
                            <select className="widget-type-detail-select">
                                <option value="h1" selected>Heading 1</option>
                                <option value="h2">Heading 2</option>
                                <option value="h3">Heading 3</option>
                                <option value="h4">Heading 4</option>
                                <option value="h5">Heading 5</option>
                            </select>
                            <input className="widget-name"
                                   type="text"
                                   value="Widget name"
                                   placeholder="Widget name" />
                            <hr />
                            <div className="widget-preview">
                                <h4>Preview</h4>
                                <h1>Heading Text</h1>
                            </div>
                        </div>
                        <div className="new-widget-icon col-2">
                            <button>
                                <i className="fa fa-plus-circle fa-3x"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


export default CourseEditor