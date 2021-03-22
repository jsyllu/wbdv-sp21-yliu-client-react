import React, {useState} from "react"
import YouTube from "react-youtube";

const VideoYoutubeWidget = ({widget, editing, preview}) => {
    const [videoId, setVideoId] = useState(widget.videoId)
    const opts = {
        height: widget.height,
        width: widget.width
    }
    return (
        <>
            {
                editing &&
                <>
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
                    <h3>{widget.title}</h3>
                    <YouTube videoId={videoId}
                             opts={opts} />
                </>
            }
        </>
    )
}

export default VideoYoutubeWidget