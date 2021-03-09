import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteItemDialog = ({item, deleteItem, openDialog}) => {
    const [open, setOpen] = useState(true);

    const exitDialog = () => {
        setOpen(false)
        openDialog(false)
    }

    const deleteThisItem = () => {
        deleteItem(item)
        exitDialog()
    }

    return (
        <div>
            <Dialog open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {`Delete this ${(item.type !== 'undefined'
                        && typeof item.type !== 'undefined') ? item.type : 'item'}?`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <p>Title: {item.title}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => exitDialog()}
                            color="primary">
                        No
                    </Button>
                    <Button onClick={() => deleteThisItem()}
                            color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DeleteItemDialog