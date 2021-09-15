import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoCheckboxComponent from './TodoCheckboxComponent';

describe('<TodoCheckboxComponent />', () => {
  test('it should mount', () => {
    render(<TodoCheckboxComponent />);
    
    const todoCheckboxComponent = screen.getByTestId('TodoCheckboxComponent');

    expect(todoCheckboxComponent).toBeInTheDocument();
  });
});