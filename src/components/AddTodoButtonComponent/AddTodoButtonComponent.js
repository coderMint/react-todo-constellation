import React from 'react';
import styles from './AddTodoButtonComponent.module.scss';

import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddTodoButtonComponent = () => {
  return (
    <div className={styles.AddTodoButtonComponent} data-testid="AddTodoButtonComponent">
      <IconButton aria-label="add new todo">
        <AddCircleIcon />
      </IconButton>
    </div>
  );
};

export default AddTodoButtonComponent;
