import React, { useState } from 'react';
import styles from './TodoItemComponent.module.scss';

import Box from '@material-ui/core/Box';
import Checkbox from "@material-ui/core/Checkbox";

// Purpose: To render one todo.

const TodoItemComponent = () => {
  
  //TODO: Replace this later with the state from redux about the item being un/checked fetched from db
  //TODO: text content rendered between <span> will become a for loop

  // useState to update todo entry styles
  const [checkedState, setChecked] = useState(false);

  const handleChange = (event) => {
    return setChecked(event.target.checked);
  }

  return (
    <div className={styles.TodoItemComponent} data-testid="TodoItemComponent">
        <Box display="flex" 
          justifyContent="center" 
          alignItems="center"
          p={1}>

          <Checkbox
            checked={checkedState}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          
          {/* note content */}
          <span 
            className={checkedState == true ? styles.checked : null}
            onClick={() => setChecked(!checkedState)}>
            complete todo app
          </span>
          
        </Box>
    </div>
  );
};

export default TodoItemComponent;