import React, {useState} from "react"

const ParagraphWidget = ({widget, editing, preview}) => {
    const [text, setText] = useState(widget.text)
    return (
        <>
            {
                editing &&
                <>
                    <textarea className="widget-content"
                              cols="50"
                              rows="5"
                              placeholder="paragraph goes here..."
                              onChange={(e) => setText(e.target.value)}>
                    {text}
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