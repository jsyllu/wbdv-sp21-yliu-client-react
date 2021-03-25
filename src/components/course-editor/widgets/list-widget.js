import React, {useEffect, useState} from "react"

const ListWidget = ({widget, editing, preview, setWidget}) => {

    const [text, setText] = useState(widget.text);
    const [ordered, setOrdered] = useState(widget.ordered)
    const [ListTag, setListTag] = useState(`ul`)

    useEffect(() => {
        if (ordered) {
            setListTag(`ol`)
        } else {
            setListTag(`ul`)
        }
    }, [ordered])

    useEffect(() => {
        widget.text = text;
        widget.ordered = ordered;
        setWidget(widget);
    }, [text, ordered])

    return (
        <>
            {
                editing &&
                <>
                    <button className={`float-right fas fa-list-${ListTag}`}
                            onClick={() => setOrdered(!ordered)}>
                    </button>
                    <label className=""
                           htmlFor="list-text">
                        List Items
                    </label>
                    <textarea value={text}
                              onChange={(e) => setText(e.target.value)}
                              placeholder="Enter one list item per line"
                              name=""
                              className="widget-content"
                              style={{height: "inherit"}}
                              id="list-text"
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
                    <ListTag>
                        {
                            text.split("\n").map(item => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ListTag>
                </>
            }
        </>
    )
}

export default ListWidget