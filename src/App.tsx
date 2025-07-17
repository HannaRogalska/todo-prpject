import { useEffect, useState } from 'react'
import type { Todo } from './types/Todo.ts'
import './App.css'
import InputForm from './components/InputForm.tsx'


function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  
  const fetchTodos = async (): Promise<void> => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      )
        if(!res.ok) {
          throw new Error("Network response was not ok")
      }
      const data: Todo[] = await res.json()
      setTodos(data);
    } catch(Error) {
      console.error("Failed to fetch todos:", Error);
    }
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  
  return (
    <>
      <ol>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
      <InputForm todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App
