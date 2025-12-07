import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { Dialog } from "./components/Dialog";
import { TextInput } from "./components/TextInput";
import { Button } from "./components/Button";
import { use } from "react";
import TodoContext from "./components/TodoProvider/TodoContext";
import { TodoGroup } from "./components/TodoGroup";
import { EmptyState } from "./components/EmptyState";

function App() {
  const {
    addTodo,
    editTodo,
    todosList,
    showDialog,
    selectedTodo,
    openFormTodoDialog,
    closeFormTodoDialog,
  } = use(TodoContext);

  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData);
    } else {
      addTodo(formData);
    }
    closeFormTodoDialog();
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
          <TodoGroup
            heading={"Para estudar"}
            items={todosList.filter((item) => !item.completed)}
          ></TodoGroup>
          {todosList.length === 0 && <EmptyState />}
          <TodoGroup
            heading={"Concluído"}
            items={todosList.filter((item) => item.completed)}
          ></TodoGroup>
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <form
                action={handleFormSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <TextInput
                  name="task"
                  placeholder="Digite uma nova tarefa"
                  defaultValue={selectedTodo?.description}
                />
                <Button>Adicionar</Button>
              </form>
            </Dialog>
            <FabButton onClick={() => openFormTodoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
