import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoName, todoDate }) {

  const {deleteItem} = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4"> {todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger myButton"
            onClick={() => deleteItem(todoName)}
          >
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
