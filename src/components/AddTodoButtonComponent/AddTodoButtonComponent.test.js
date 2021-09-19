import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddTodoButtonComponent from './AddTodoButtonComponent';

describe('<AddTodoButtonComponent />', () => {
  test('it should mount', () => {
    render(<AddTodoButtonComponent />);
    
    const addTodoButtonComponent = screen.getByTestId('AddTodoButtonComponent');

    expect(addTodoButtonComponent).toBeInTheDocument();
  });
});