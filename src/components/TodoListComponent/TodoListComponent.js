import React from 'react';
import styles from './TodoListComponent.module.scss';

const TodoListComponent = () => {
  return (
    <div className={styles.TodoListComponent} data-testid="TodoListComponent">
      TodoListComponent Component
    </div>
  );
};

export default TodoListComponent;