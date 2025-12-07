import TodoContext from "./TodoContext";
import { useEffect, useState } from "react";

const TODOS = "todos";

export function TodoProvider({ children }) {
  const savedTodos = localStorage.getItem(TODOS);

  const [todosList, setTodos] = useState(
    savedTodos ? JSON.parse(savedTodos) : []
  );
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todosList));
  }, [todosList]);

  const toggleTodoCompleted = (todo) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    });
  };

  const editTodo = (formData) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === selectedTodo.id) {
          return {
            ...item,
            description: formData.get("task"),
          };
        }
        return item;
      });
    });
  };

  const addTodo = (event) => {
    const newTodo = {
      description: event.get("task"),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((prev) => {
      return [...prev, { id: prev.length + 1, ...newTodo }];
    });
  };

  const deleteTodo = (item) => {
    setTodos((prev) => {
      return prev.filter((t) => t.id !== item.id);
    });
  };

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  return (
    <TodoContext
      value={{
        todosList,
        showDialog,
        selectedTodo,
        addTodo,
        editTodo,
        deleteTodo,
        openFormTodoDialog,
        toggleTodoCompleted,
        closeFormTodoDialog,
      }}
    >
      {children}
    </TodoContext>
  );
}
