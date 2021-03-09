import React, {useState} from "react"
import {Link} from "react-router-dom"
import DeleteItemDialog from "../util/delete-item-dialog";
import DropDownFloating from "../util/drop-down-floating";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        dataType
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    const [deleteDialog, setDeleteDialog] = useState(false)
    const options = [
        {key: 'edit', icon: 'fas fa-pencil-alt', text: 'Edit', setFunc: setEditing},
        {key: 'delete', icon: 'far fa-trash-alt', text: 'Delete', setFunc: setDeleteDialog}
    ]
    return (
        <>
            {
                !editing &&
                <>
                    <Link to={to}>
                        {item.title}&nbsp;
                    </Link>
                    <i>
                        <DropDownFloating
                            options={options}
                            // btnIcon={'fas fa-ellipsis-h'}
                            dataType={dataType}
                            btnColor={'lightBlue'}
                        />
                    </i>
                    {/*<i className="fas fa-ellipsis-h"*/}
                    {/*   onClick={() => setEditing(true)}></i>*/}
                </>
            }
            {
                editing &&
                <>
                    <input type="text"
                           value={itemCache.title}
                           onChange={(e) =>
                               setItemCache({...itemCache, title: e.target.value})} />
                    <i onClick={() => setEditing(false)}
                       className="fas fa-times">&ensp;</i>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check">&ensp;</i>
                </>
            }
            {
                deleteDialog &&
                <DeleteItemDialog
                    item={item}
                    deleteItem={deleteItem}
                    openDialog={setDeleteDialog}
                />
            }
        </>
    )
}

export default EditableItem