import React, {useEffect, useState} from "react"
import HeadingWidget from "../course-editor/widgets/heading-widget";
import ParagraphWidget from "../course-editor/widgets/paragraph-widget";
import UrlWidget from "../course-editor/widgets/url-widget";
import VideoYoutubeWidget from "../course-editor/widgets/video-widget";
import ImageWidget from "../course-editor/widgets/image-widget";
import DeleteItemDialog from "../util/delete-item-dialog";
import ListWidget from "../course-editor/widgets/list-widget";

const EditableWidget = (
    {
        widget,
        deleteWidget,
        updateWidget,
        preview
    }) => {
    const HEADING = "HEADING"
    const PARAGRAPH = "PARAGRAPH"
    const URL = "URL"
    const IMAGE = "IMAGE"
    const VIDEO_YOUTUBE = "VIDEO_YOUTUBE"
    const LIST = "LIST"
    const FILE = "FILE"

    const [type, setType] = useState(widget.type)
    const [editing, setEditing] = useState(false)
    const [theWidget, setWidget] = useState(widget)
    const [deleteDialog, setDeleteDialog] = useState(false)

    useEffect(() => {
        if (!deleteDialog) {
            setEditing(false)
        }
    }, [deleteDialog])

    const updateTheWidget = () => {
        widget = {
            ...widget,
            ...theWidget,
            type: type
        }
        updateWidget(widget)
        exitEditing()
    }

    const exitEditing = () => {
        setType(widget.type)
        setWidget(widget)
        setEditing(false)
    }

    return (
        <>
            <div className="widget">
                {
                    !editing &&
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog float-right"></i>
                }
                {
                    editing &&
                    <>
                        <div className="widget-header">
                            <div className="row">
                                <h3 className="widget-type-title">
                                    {widget.name}
                                </h3>
                                <div className="widget-header-right">
                                    <button className="widget-position-icon">
                                        <i className="fa fa-chevron-up fa-lg"></i>
                                    </button>
                                    <button className="widget-position-icon">
                                        <i className="fa fa-chevron-down fa-lg"></i>
                                    </button>
                                    <select className="widget-type-select"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}>
                                        <option value={HEADING}>Heading</option>
                                        <option value={PARAGRAPH}>Paragraph</option>
                                        <option value={URL}>Url</option>
                                        <option value={IMAGE}>Image</option>
                                        <option value={VIDEO_YOUTUBE}>Video Youtube</option>
                                        <option value={LIST}>List</option>
                                        <option value={FILE}>File</option>
                                    </select>
                                    <button className="widget-delete-icon"
                                            onClick={() => exitEditing()}>
                                        <i className="fas fa-times fa-lg"></i>
                                    </button>
                                    <button className="widget-delete-icon"
                                            onClick={() => updateTheWidget()}>
                                        <i className="fas fa-check fa-lg"></i>
                                    </button>
                                    <button className="widget-delete-icon"
                                            onClick={() => setDeleteDialog(true)}>
                                        <i className="fas fa-trash fa-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                }

                {
                    (() => {
                        switch (type) {
                            case HEADING:
                                return (
                                    <HeadingWidget widget={widget}
                                                   editing={editing}
                                                   preview={preview}
                                                   setWidget={setWidget} />
                                )
                            case PARAGRAPH:
                                return (
                                    <ParagraphWidget widget={widget}
                                                     editing={editing}
                                                     preview={preview}
                                                     setWidget={setWidget} />
                                )
                            case URL:
                                return (
                                    <UrlWidget widget={widget}
                                               editing={editing}
                                               preview={preview}
                                               setWidget={setWidget} />
                                )
                            case VIDEO_YOUTUBE:
                                return (
                                    <VideoYoutubeWidget widget={widget}
                                                        editing={editing}
                                                        preview={preview}
                                                        setWidget={setWidget} />
                                )

                            case IMAGE:
                                return (
                                    <ImageWidget widget={widget}
                                                 editing={editing}
                                                 preview={preview}
                                                 setWidget={setWidget} />
                                )
                            case LIST:
                                return (
                                    <ListWidget widget={widget}
                                                editing={editing}
                                                preview={preview}
                                                setWidget={setWidget} />
                                )
                            default:
                                return (
                                    <></>
                                )
                        }
                    })()
                }
            </div>
            {
                deleteDialog &&
                <DeleteItemDialog
                    item={widget}
                    deleteItem={deleteWidget}
                    openDialog={setDeleteDialog}
                />
            }
        </>
    )
}

export default EditableWidget