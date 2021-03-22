import React, {useState} from "react"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import UrlWidget from "./url-widget";
import VideoYoutubeWidget from "./video-widget";
import ImageWidget from "./image-widget";

export const EditableWidget = (
    {
        widget, deleteWidget, updateWidget, preview
    }) => {
    const HEADING = "HEADING"
    const PARAGRAPH = "PARAGRAPH"
    const URL = "URL"
    const IMAGE = "IMAGE"
    const VIDEO_YOUTUBE = "VIDEO_YOUTUBE"
    const FILE = "FILE"

    const [type, setType] = useState(widget.type)
    const [editing, setEditing] = useState(false)

    // Todo: move this to individual Widget...
    const updateTheWidget = () => {
        widget = {
            ...widget,
            type: type
        }
        updateWidget(widget)
        exitEditing()
    }

    const exitEditing = () => {
        setType(widget.type)
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
                                    {type} widget
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
                                            onClick={() => deleteWidget(widget)}>
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
                                                   preview={preview} />
                                )
                            case PARAGRAPH:
                                return (
                                    <ParagraphWidget widget={widget}
                                                     editing={editing}
                                                     preview={preview} />
                                )
                            case URL:
                                return (
                                    <UrlWidget widget={widget}
                                               editing={editing}
                                               preview={preview} />
                                )
                            case VIDEO_YOUTUBE:
                                return (
                                    <VideoYoutubeWidget widget={widget}
                                                        editing={editing}
                                                        preview={preview} />
                                )

                            case IMAGE:
                                return (
                                    <ImageWidget widget={widget}
                                                 editing={editing}
                                                 preview={preview} />
                                )
                            default:
                                return (
                                    <></>
                                )
                        }
                    })()
                }
            </div>
        </>
    )
}

export default EditableWidget