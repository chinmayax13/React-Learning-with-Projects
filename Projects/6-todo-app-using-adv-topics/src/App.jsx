import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemsList from "./components/TodoItemsList";
import EmptyMsg from "./components/EmptyMsg";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo />
        <EmptyMsg></EmptyMsg>
        <TodoItemsList></TodoItemsList>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
