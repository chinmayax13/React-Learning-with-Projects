import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItemsList({ onDeleteClick }) {

  //const todoObj = useContext(TodoItemsContext);
  //const todoItems = todoObj.todoItems;  OR=
  const {todoItems} = useContext(TodoItemsContext);

  return (
    <div className="items-container">
      {todoItems.map((items) => (
        <TodoItem
          key={items.name}
          todoName={items.name}
          todoDate={items.dueDate}
          //onDeleteClick={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItemsList;
