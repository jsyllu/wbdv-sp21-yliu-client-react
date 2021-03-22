import React, {useState} from "react"

const ImageWidget = ({widget, editing, preview}) => {
    const [source, setSource] = useState(widget.source)
    const [text, setText] = useState(widget.text)
    // const [height, setHeight] = useState(widget.height)
    const [width, setWidth] = useState(widget.width)
    return (
        <>
            {
                editing &&
                <>
                    <input type="text"
                           className="widget-content"
                           value={source}
                           placeholder="image url"
                           onChange={(e) => setSource(e.target.value)} />
                    <input type="text"
                           className="widget-content"
                           value={text}
                           placeholder="image text"
                           onChange={(e) => setText(e.target.value)} />
                    {
                        preview &&
                        <hr/>
                    }
                </>
            }
            {
                (!editing || preview) &&
                <>
                    <img src={source}
                         alt={text}
                         width={width}
                        // height={height}
                    />
                    <p>{text}</p>
                </>
            }
        </>
    )
}

export default ImageWidget