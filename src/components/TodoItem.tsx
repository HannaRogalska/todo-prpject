import type { Todo } from "./../types/Todo.ts";
interface TodoItemProps {
  todos: Todo[];
  todo: Todo;
  setTodos: (todos: Todo[]) => void;
}
const TodoItem = ({ todo, todos, setTodos }: TodoItemProps) => {
 
  const handleToggle = (): void => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updatedTodos);
  }
  const handleDelete = (): void => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <button onClick={handleDelete}>Delete Todo</button>
    </li>
  );
};

export default TodoItem;
