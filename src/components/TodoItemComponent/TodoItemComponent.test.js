import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoItemComponent from './TodoItemComponent';

describe('<TodoItemComponent />', () => {
  test('it should mount', () => {
    render(<TodoItemComponent />);
    
    const todoItemComponent = screen.getByTestId('TodoItemComponent');

    expect(todoItemComponent).toBeInTheDocument();
  });
});