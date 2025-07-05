import styles from "./EmptyMsg.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const EmptyMsg = () => {
  const {todoItems} = useContext(TodoItemsContext);  
  return (
   todoItems.length === 0 && <h4 className={styles.emptyMsg}>Nothing To do for now..</h4>
  );
};

export default EmptyMsg;
