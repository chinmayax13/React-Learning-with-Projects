import TodoItem from "./TodoItem";

function TodoItemsList({ todoItems, onDeleteClick }) {
  return (
    <div className="items-container">
      {todoItems.map((items) => (
        <TodoItem
          key={items.name}
          todoName={items.name}
          todoDate={items.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItemsList;
