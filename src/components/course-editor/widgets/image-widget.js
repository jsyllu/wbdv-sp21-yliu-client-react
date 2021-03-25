import React, {useEffect, useState} from "react"

const ImageWidget = ({widget, editing, preview, setWidget}) => {
    const [source, setSource] = useState(widget.source)
    const [text, setText] = useState(widget.text)
    const [height, setHeight] = useState(widget.height)
    const [width, setWidth] = useState(widget.width)

    useEffect(() => {
        widget.source = source;
        widget.text = text;
        widget.width = width;
        widget.height = height;
        setWidget(widget)
    }, [source, text, width, height])

    return (
        <>
            {
                editing &&
                <>
                    <label className=""
                           htmlFor="img-url">
                        Image Url
                    </label>
                    <input type="text"
                           className="widget-content"
                           id="img-url"
                           value={source}
                           placeholder="image url"
                           onChange={(e) => setSource(e.target.value)} />
                    <label className=""
                           htmlFor="img-text">
                        Description
                    </label>
                    <input type="text"
                           className="widget-content"
                           id="img-text"
                           value={text}
                           placeholder="image description"
                           onChange={(e) => setText(e.target.value)} />
                    <label className=""
                           htmlFor="img-width">
                        Width
                    </label>
                    <input type="number"
                           className="widget-content"
                           id="img-width"
                           value={width}
                           placeholder="450"
                           onChange={(e) => setWidth(parseInt(e.target.value))} />
                    <label className=""
                           htmlFor="img-height">
                        Height
                    </label>
                    <input type="number"
                           className="widget-content"
                           id="img-height"
                           value={height}
                           placeholder="300"
                           onChange={(e) => setHeight(parseInt(e.target.value))} />
                    {
                        preview &&
                        <hr />
                    }
                </>
            }
            {
                (!editing || preview) &&
                <>
                    <img src={source}
                         alt={text}
                         width={width}
                         height={height}
                    />
                    <p>{text}</p>
                </>
            }
        </>
    )
}

export default ImageWidget