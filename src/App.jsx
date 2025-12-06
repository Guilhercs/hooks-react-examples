import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { SubHeading } from "./components/SubHeading";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { Dialog } from "./components/Dialog";
import { TextInput } from "./components/TextInput";
import { Button } from "./components/Button";
import { useState } from "react";

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

function App() {
  const [todosList, setTodos] = useState(todos);
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  function addTodo(event) {
    const newTodo = {
      description: event.get("task"),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((prev) => {
      return [...prev, { id: prev.length, ...newTodo }];
    });
    toggleDialog();
  }

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

  const removeTodo = (item) => {
    setTodos((prev) => {
      return prev.filter((t) => t.id !== item.id);
    });
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todosList
              .filter((item) => !item.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    onToggleCompleted={toggleTodoCompleted}
                    onDeleteTodo={removeTodo}
                  />
                );
              })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todosList
              .filter((item) => item.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    onToggleCompleted={toggleTodoCompleted}
                    onDeleteTodo={removeTodo}
                  />
                );
              })}
          </ToDoList>
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <form
                action={addTodo}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <TextInput name="task" placeholder="Digite uma nova tarefa" />
                <Button>Adicionar</Button>
              </form>
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
