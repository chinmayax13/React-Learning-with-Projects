import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  //Map Method
 // let foodItem = ["Dal", "Banana", "Apple", "Vegetables", "Milk", "Eggs"];

  /* if(foodItem.length === 0){
    return <h2>I am hungry</h2>
  }*/
  //  let emptyMsg = foodItem.length === 0 ? <h2>No foodavailable<h2>null ;
 
  let [foodItem,setFoodItems] = useState([])

   const handleKeyDown = (event) =>{
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItem, newFoodItem];
      setFoodItems(newItems);
      console.log("item Added is "+newFoodItem)
    }
  }

  return (
    <React.Fragment>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
        <FoodItems Foods={foodItem}></FoodItems>
      </Container>

      <Container>
        <p>The above list contains the list of healthy food items. So eat healthy and stay healthy.</p>
      </Container>
    </React.Fragment>
  );
}

export default App;
