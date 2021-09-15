import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoListComponent from './TodoListComponent';

describe('<TodoListComponent />', () => {
  test('it should mount', () => {
    render(<TodoListComponent />);
    
    const todoListComponent = screen.getByTestId('TodoListComponent');

    expect(todoListComponent).toBeInTheDocument();
  });
});