import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function AddTodo() {

  const {addNewItem} = useContext(TodoItemsContext);

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClick =()=>{
    addNewItem(todoName,todoDate);
    setTodoName("");//make it blank again
    setTodoDate("");
  }
  return (
    <div className="container items-container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Tod Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success myButton"
            onClick={handleAddButtonClick}
          >
          <MdLibraryAdd/> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
