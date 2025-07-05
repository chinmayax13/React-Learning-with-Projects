import TodoItem from "./TodoItem";

function TodoItemsList({todoItems}) {
  return (
    <div className="items-container">
      {todoItems.map((items) => (
        <TodoItem todoName={items.name} todoDate={items.dueDate}>
        </TodoItem>
      ))}
    </div>
  );
}

export default TodoItemsList;
