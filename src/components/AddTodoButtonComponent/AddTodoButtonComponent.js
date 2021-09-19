import React, { useState } from 'react';
import styles from './AddTodoButtonComponent.module.scss';

import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

// Purpose: To add a todo to the list of todos.

const AddTodoButtonComponent = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className={styles.AddTodoButtonComponent} data-testid="AddTodoButtonComponent">
      <IconButton 
        onClick={handleClickOpen}
        aria-label="add new todo">
        <AddCircleIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Todo"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add Todo</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTodoButtonComponent;
