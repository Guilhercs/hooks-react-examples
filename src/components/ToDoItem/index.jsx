import "./todo-item.style.css";
import { IconPencil, IconTrash } from "../icons";
import { use } from "react";
import TodoContext from "../TodoProvider/TodoContext";

export function ToDoItem({ item }) {
  const { toggleTodoCompleted, deleteTodo } = use(TodoContext);

  const styles = ["todo-item"];

  if (item.completed) {
    styles.push("completed");
  }

  return (
    <li className={styles.join(" ")}>
      <p className="date">
        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <div className="details">
        <input
          onClick={() => toggleTodoCompleted(item)}
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button onClick={() => deleteTodo(item)} className="btn">
            <IconTrash />
          </button>
          <button className="btn">
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
