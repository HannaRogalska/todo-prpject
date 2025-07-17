import type { Todo } from "./../types/Todo.ts";
import TodoItem from "./TodoItem.tsx";
interface TodoListProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
   if (todos.length === 0) {
     return <p>No todos available</p>;
   }
  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </ol>
  );
};

export default TodoList;
