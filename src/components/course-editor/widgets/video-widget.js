import React, {useEffect, useState} from "react"
import YouTube from "react-youtube";

const VideoYoutubeWidget = ({widget, editing, preview, setWidget}) => {
    const [videoId, setVideoId] = useState(widget.videoId)
    const [title, setTitle] = useState(widget.title)
    // const [height, setHeight] = useState(widget.height)
    // const [width, setWidth] = useState(widget.width)
    const opts = {
        height: widget.height,
        width: widget.width
    }

    useEffect(() => {
        widget.videoId = videoId;
        widget.title = title;
        setWidget(widget)
    }, [videoId, title])

    return (
        <>
            {
                editing &&
                <>
                    <input type="text"
                           className="widget-content"
                           value={title}
                           placeholder="youtube video title"
                           onChange={(e) => setTitle(e.target.value)} />
                    <input type="text"
                           className="widget-content"
                           value={videoId}
                           placeholder="youtube video id of 11 characters"
                           onChange={(e) => setVideoId(e.target.value)} />
                    {
                        preview &&
                        <hr />
                    }
               </>
            }
            {
                (!editing || preview) &&
                <>
                    <h3>{title}</h3>
                    <YouTube videoId={videoId}
                             opts={opts} />
                </>
            }
        </>
    )
}

export default VideoYoutubeWidget