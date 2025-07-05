import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoReducer = (currTodoItem, action) => {
  let newTodoItem = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currTodoItem.filter(
      (items) => items.name !== action.payload.itemName
    );
  }
  return newTodoItem;
};

const TodoItemsContextProvider = ({children}) => {
  //const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodo] = useReducer(todoReducer, []);

  function addNewItem(itemName, itemDueDate) {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodo(newItemAction);
    //console.log(`new item added ${itemName} and Date: ${itemDueDate}`);
    /*const newItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newItems);*/
  }

  function deleteItem(todoItemName) {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodo(deleteItemAction);
    /*const newTodoItems = todoItems.filter(
      (items) => items.name !== todoItemName
    );
    setTodoItems(newTodoItems);*/
  }
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
