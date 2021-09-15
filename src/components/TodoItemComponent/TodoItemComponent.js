import React from 'react';
import styles from './TodoItemComponent.module.scss';

import TodoCheckboxComponent from '../TodoCheckboxComponent/TodoCheckboxComponent';
import TodoItemTextComponent from '../TodoItemTextComponent/TodoItemTextComponent';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const TodoItemComponent = () => {

  const handleClick = (event) => {
    
  }

  return (
    <div className={styles.TodoItemComponent} data-testid="TodoItemComponent">
      <Button onClick={handleClick}>
        <Box display="flex" 
          justifyContent="center" 
          alignItems="center"
          p={1}>
          <TodoCheckboxComponent />
          <TodoItemTextComponent todoText="complete todo app" />
        </Box>
      </Button>
    </div>
  );
};

export default TodoItemComponent;