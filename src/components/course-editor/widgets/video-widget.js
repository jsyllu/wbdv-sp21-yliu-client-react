import React, {useEffect, useState} from "react"
import YouTube from "react-youtube";

const VideoYoutubeWidget = ({widget, editing, preview, setWidget}) => {
    const [videoId, setVideoId] = useState(widget.videoId)
    const [title, setTitle] = useState(widget.title)
    const [height, setHeight] = useState(widget.height)
    const [width, setWidth] = useState(widget.width)
    const opts = {
        height: height,
        width: width
    }

    useEffect(() => {
        widget.videoId = videoId;
        widget.title = title;
        widget.width = width;
        widget.height = height;
        setWidget(widget)
    }, [videoId, title, width, height])

    return (
        <>
            {
                editing &&
                <>
                    <label className=""
                           htmlFor="video-youtube-title">
                        Video Title
                    </label>
                    <input type="text"
                           className="widget-content"
                           id="video-youtube-title"
                           value={title}
                           placeholder="youtube video title"
                           onChange={(e) => setTitle(e.target.value)} />
                    <label className=""
                           htmlFor="video-youtube-id">
                        Youtube Video Id
                    </label>
                    <input type="text"
                           className="widget-content"
                          id="video-youtube-id"
                           value={videoId}
                           placeholder="youtube video id of 11 characters"
                           onChange={(e) => setVideoId(e.target.value)} />
                    <label className=""
                           htmlFor="video-youtube-width">
                        Width
                    </label>
                    <input type="number"
                           className="widget-content"
                           id="video-youtube-width"
                           value={width}
                           placeholder="640"
                           onChange={(e) => setWidth(e.target.value)} />
                   <label className=""
                           htmlFor="video-youtube-height">
                    Height
                </label>
                    <input type="number"
                           className="widget-content"
                           id="video-youtube-height"
                           value={height}
                           placeholder="390"
                           onChange={(e) => setHeight(e.target.value)} />
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