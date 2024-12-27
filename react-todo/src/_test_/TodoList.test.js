import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders the initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a todo');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo as completed', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');

  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];

  fireEvent.click(deleteButton);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
