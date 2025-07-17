import { type ChangeEvent, type JSX } from 'react'
import { useState } from 'react';
import type { Todo } from "./../types/Todo.ts";
import type { Dispatch, SetStateAction } from "react";


interface InputFormProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const InputForm = ({ todos, setTodos }: InputFormProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    console.log(`Input changed: ${e.target.value}`);
  };
  const handleAddTodo = (): void => {
    if (inputValue.trim() === "") {
      console.log("Input is empty, cannot add todo");
      return;
    }
    const newTodo: Todo = {
      id: Date.now(), // Using timestamp as a unique ID
      title: inputValue,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    console.log("Adding new todo:", updatedTodos);
    setTodos(updatedTodos);
    setInputValue(""); 
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Add a new todo"
        onChange={inputChange}
      />
      <button type="submit" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default InputForm
