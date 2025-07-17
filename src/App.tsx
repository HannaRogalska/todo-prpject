import { useEffect, useState } from 'react'
import type { Todo } from './types/Todo.ts'
import './App.css'
import InputForm from './components/InputForm.tsx'
import TodoList from './components/TodoList.tsx'


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
    } catch(error) {
      console.error("Failed to fetch todos:", error);
    }
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  
  return (
    <>
      <TodoList  todos={todos} setTodos={setTodos} />
      <InputForm todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App
