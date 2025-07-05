import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemsList from "./components/TodoItemsList";

import "./App.css";
import { useState } from "react";

function App() {
  const todoItems = [{
    name : "Buy Milk",
    dueDate : "26/06/2025",
  },
  {
    name : "Go to Gym",
    dueDate: "26/06/2025",
  },
   {
    name : "Go to College",
    dueDate: "07/07/2025",
  },
]

  function handleNewItem(itemName , itemDueDate){
    console.log(`new item added ${itemName} and Date: ${itemDueDate}`)
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItemsList todoItems={todoItems}></TodoItemsList>
    </center>
  );
}

export default App;
