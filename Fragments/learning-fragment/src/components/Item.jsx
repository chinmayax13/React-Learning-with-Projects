import styles from "./Item.module.css"

const Item = ({foodItems , bought , handleBuyButton}) =>{

 /* const buyOnClick = (food) =>{
    return <>
    console.log(`${food} being bought..`)
    
    </>
  }*/
 // return  <li className="list-group-item"> {props.foodItems} </li>
 return  <li className={`${styles['my-items']} list-group-item ${bought &&'active'}`}>
   <span className={styles['myspan']}>{foodItems}</span>
   <button type="button" className={`${styles.myBtn} btn btn-info`} onClick={handleBuyButton}>Buy</button>
   </li>
}

export default Item;