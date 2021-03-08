import React, {useState} from "react"
import {Link} from "react-router-dom"

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link to={to}>
                        {item.title}&nbsp;
                    </Link>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-pencil-alt"></i>
                </>
            }
            {
                editing &&
                <>
                    <input type="text"
                           value={itemCache.title}
                           onChange={(e) =>
                               setItemCache({...itemCache, title: e.target.value})} />
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check"></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(item)
                    }} className="fas fa-times"></i>
                </>
            }
        </>
    )
};

export default EditableItem