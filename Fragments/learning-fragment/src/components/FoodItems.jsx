import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ Foods }) => {
  let foodItem = Foods;
  let emptyMsg = foodItem.length === 0 ? <h2>No food available</h2> : null;
  let [activeItems, setActiveItems] = useState([]);
  let onBuyClick = (items, event) => {
    let newActive = [...activeItems, items];
    setActiveItems([newActive]);
  };

  return (
    <ul className="list-group">
      {emptyMsg}
      {foodItem.map((items) => (
        <Item
          key={items}
          foodItems={items}
          bought={activeItems.includes(items)}
          handleBuyButton={(event) => onBuyClick(items, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
