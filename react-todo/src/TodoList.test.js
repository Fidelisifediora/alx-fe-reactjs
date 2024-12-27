import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    // Verify if Todo list is rendered
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test('initial todos are displayed', () => {
    render(<TodoList />);
    // Check if initial todos are rendered
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
    expect(screen.getByText(/Build App/i)).toBeInTheDocument();
  });

  test('adding a new todo works', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/New todo/i);
    const button = screen.getByText(/Add Todo/i);

    // Simulate adding a new todo
    fireEvent.change(input, { target: { value: 'Test new Todo' } });
    fireEvent.click(button);

    expect(screen.getByText(/Test new Todo/i)).toBeInTheDocument();
  });

  test('toggle a todo completion status works', () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);

    // Simulate clicking the todo item to toggle completion
    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deleting a todo works', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/Delete/i)[0];

    // Simulate deleting the first todo
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
