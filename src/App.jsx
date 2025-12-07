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
import { useState, use } from "react";
import TodoContext from "./components/TodoProvider/TodoContext";
import { TodoGroup } from "./components/TodoGroup";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const { todosList, addTodo } = use(TodoContext);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  const handleFormSubmit = (formData) => {
    addTodo(formData);
    toggleDialog();
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
          <TodoGroup
            heading={"Concluído"}
            items={todosList.filter((item) => item.completed)}
          ></TodoGroup>
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <form
                action={handleFormSubmit}
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
