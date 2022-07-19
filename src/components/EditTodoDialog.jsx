import * as React from 'react';

import { useState } from "react"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({open, dialogHandle, todo, editTodo}) {

  const [editedText, setEditedText] = useState(todo.text)

  const textHandler = () => {
    editTodo(todo.id, editedText);
    dialogHandle();
  }


  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandle}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Editing To Do"}</DialogTitle>
        <DialogContent>
          <TextField fullWidth defaultValue={editedText} onChange={(e) => setEditedText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandle}>Cancel</Button>
          <Button onClick={textHandler}>OK</Button>
        </DialogActions>
      </Dialog>
  );
}
