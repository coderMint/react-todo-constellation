import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoItemTextComponent from './TodoItemTextComponent';

describe('<TodoItemTextComponent />', () => {
  test('it should mount', () => {
    render(<TodoItemTextComponent />);
    
    const todoItemTextComponent = screen.getByTestId('TodoItemTextComponent');

    expect(todoItemTextComponent).toBeInTheDocument();
  });
});