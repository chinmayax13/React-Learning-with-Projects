import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemsList from "./components/TodoItemsList";
import EmptyMsg from "./components/EmptyMsg";
import { useState } from "react";
import "./App.css";

function App() {
  /*const initialTodoItems = [{
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
]*/

const [todoItems , setTodoItems] = useState([]);

  function handleNewItem(itemName , itemDueDate){
    //console.log(`new item added ${itemName} and Date: ${itemDueDate}`);
    const newItems = [...todoItems, {name:itemName , dueDate: itemDueDate}];
    setTodoItems(newItems);
  }

  function handleDeleteItem(todoItemName){
    const newTodoItems = todoItems.filter(items => items.name !== todoItemName );
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length ===  0 && <EmptyMsg></EmptyMsg>}
      <TodoItemsList todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItemsList>
    </center>
  );
}

export default App;
