import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import { SubHeading } from "../SubHeading";

export function TodoGroup({ items, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ToDoList>
        {items.map(function (t) {
          return <ToDoItem key={t.id} item={t} />;
        })}
      </ToDoList>
    </>
  );
}
