import React, {useEffect, useState} from "react"

const ParagraphWidget = ({widget, editing, preview, setWidget}) => {
    const [text, setText] = useState(widget.text)

    useEffect(() => {
        widget.text = text;
        setWidget(widget)
    }, [text])

    return (
        <>
            {
                editing &&
                <>

                    <label className=""
                           htmlFor="para-text">
                        Paragraph
                    </label>
                    <textarea value={text}
                              onChange={(e) => setText(e.target.value)}
                              name=""
                              className="widget-content"
                              style={{height: "inherit"}}
                              id="para-text"
                              rows="10">
                    </textarea>
                    {
                        preview &&
                        <hr />
                    }
                </>

            }
            {
                (!editing || preview) &&
                <>
                    <p>{widget.text}</p>
                </>
            }

        </>
    )
}

export default ParagraphWidget