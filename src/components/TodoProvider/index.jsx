import TodoContext from "./TodoContext";
import { useEffect, useState } from "react";

const todos = [
  {
    id: 1,
    description: "JSX e componentes",
    completed: false,
    createdAt: "2022-10-31",
  },
  {
    id: 2,
    description: "Props, state e hooks",
    completed: false,
    createdAt: "2022-10-31",
  },
  {
    id: 3,
    description: "Ciclo de vida dos componentes",
    completed: false,
    createdAt: "2022-10-31",
  },
  {
    id: 4,
    description: "Testes unitários com Jest",
    completed: false,
    createdAt: "2022-10-31",
  },
];

export function TodoProvider({ children }) {
  const [todosList, setTodos] = useState(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosList));
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
  function addTodo(event) {
    const newTodo = {
      description: event.get("task"),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((prev) => {
      return [...prev, { id: prev.length + 1, ...newTodo }];
    });
  }

  const deleteTodo = (item) => {
    setTodos((prev) => {
      return prev.filter((t) => t.id !== item.id);
    });
  };

  return (
    <TodoContext
      value={{ todosList, addTodo, deleteTodo, toggleTodoCompleted }}
    >
      {children}
    </TodoContext>
  );
}
