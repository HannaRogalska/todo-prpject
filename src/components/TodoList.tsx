import type { Todo } from './../types/Todo.ts';

interface TodoListProps {
    todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
    return (
      <ol>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    );
};

export default TodoList
