import React, {useEffect, useState} from "react"

const UrlWidget = ({widget, editing, preview, setWidget}) => {
    const [url, setUrl] = useState(widget.url)

    useEffect(() => {
        widget.url = url;
        setWidget(widget)
    }, [url])

    return (
        <>
            {
                editing &&
                <>
                    <input type="text"
                           className="widget-content"
                           value={url}
                           placeholder="url"
                           onChange={(e) => setUrl(e.target.value)} />
                    {
                        preview &&
                        <hr />
                    }
                </>
            }
            {
                (!editing || preview)&&
                <>
                    <a
                        // onClick={() => window.open(url, "_blank")}
                    >
                        {url}
                    </a>
                </>
            }
        </>
    )
}

export default UrlWidget