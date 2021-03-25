import React, {useEffect, useState} from "react"

const HeadingWidget = ({widget, editing, preview, setWidget}) => {
    const [size, setSize] = useState(widget.size)
    const [heading, setHeading] = useState(widget.heading)
    const [HeaderTag, setHeaderTag] = useState(`h${size}`)

    useEffect(() => {
        if (size === "undefined" || typeof size === "undefined") {
            setSize(1)
        }
        setHeaderTag(`h${size}`)
    }, [size])

    useEffect(() => {
        widget.heading = heading;
        widget.size = size;
        setWidget(widget)
    }, [heading, size])

    return (
        <>
            {
                editing &&
                <>
                    <label className=""
                           htmlFor="header-heading">
                        Heading
                    </label>
                    <input className="widget-content"
                           id="header-heading"
                           type="text"
                           value={heading}
                           onChange={(e) => setHeading(e.target.value)}
                           placeholder="new heading" />
                    <label className=""
                           htmlFor="header-size">
                        Heading Size
                    </label>
                   <select className="widget-type-detail-select"
                           id="header-size"
                            value={size}
                            onChange={(e) => setSize(parseInt(e.target.value))}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                        <option value="5">Heading 5</option>
                    </select>
                    {
                        preview &&
                        <hr />
                    }
                </>
            }
            {
                (!editing || preview) &&
                <>
                    <HeaderTag>
                        {heading}
                    </HeaderTag>
                </>
            }
        </>
    )
}

export default HeadingWidget