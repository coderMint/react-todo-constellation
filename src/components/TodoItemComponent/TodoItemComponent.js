import React, { useState } from 'react';
import styles from './TodoItemComponent.module.scss';

import Checkbox from "@material-ui/core/Checkbox";

// Purpose: To provide a template for one todo.

const TodoItemComponent = (props) => {
  
  //TODO: Replace this later with the state from redux about the item being un/checked fetched from db
  //TODO: text content rendered between <span> will become a for loop

  // useState to update todo entry styles
  const [checkedState, setChecked] = useState(false);

  const handleChange = (event) => {
    return setChecked(event.target.checked);
  }

  return (
    <div className={styles.TodoItemComponent} data-testid="TodoItemComponent">

      <Checkbox
        checked={checkedState}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        itemID={props.todoId}
      />
      
      {/* note content */}
      <span 
        className={checkedState === true ? styles.checked : null}
        onClick={() => setChecked(!checkedState)}>
        {props.todoText}
      </span>
          
    </div>
  );
};

export default TodoItemComponent;