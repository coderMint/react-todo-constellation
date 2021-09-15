import React from 'react';
import styles from './TodoItemTextComponent.module.scss';

const TodoItemTextComponent = (props) => {
  return (
    <div className={styles.TodoItemTextComponent} data-testid="TodoItemTextComponent">
      <span>{props.todoText}</span>
    </div>
  );
};

export default TodoItemTextComponent;