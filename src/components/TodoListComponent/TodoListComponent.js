import React from 'react';
import styles from './TodoListComponent.module.scss';

import TodoItemComponent from '../TodoItemComponent/TodoItemComponent';

// Purpose: To render a list of all todos by user.

const TodoListComponent = () => {

  // using the array as children pattern - https://reactpatterns.com/#array-as-children

  const fetchedArrOfTodos = [
    {id: '1', todo: 'complete ui for the todo app', usr: 'mail@mail'},
    {id: '2', todo: 'add a fetch call for the todolist from firebase', usr: 'mail@mail'},
    {id: '3', todo: 'feed the doggo', usr: 'mail@mail'},
  ];

  return (
    <div className={styles.TodoListComponent} data-testid="TodoListComponent">
      {
        fetchedArrOfTodos.map((todo) => {
          return <TodoItemComponent todoId={todo.id} todoText={todo.todo} />
        })
      }
    </div>
  );
};

export default TodoListComponent;