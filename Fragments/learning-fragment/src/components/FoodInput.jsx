import styles from "./FoodInput.module.css"
const FoodInput = ({handleKeyDown}) =>{
  const handleOnClick = ()=>{
    console.log('Button clicked');
  }
  return <>
  <input type="text" placeholder="Add Food items to buy" className = {styles.myInput} onKeyDown={handleKeyDown} />
  <button type="button" className={`${styles.myBtn} btn btn-success`} onClick={handleOnClick}>Add
  </button>
  </>
}

export default FoodInput;