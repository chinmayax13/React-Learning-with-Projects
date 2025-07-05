
import Display from "./components/Display"
import ButtonContainer from "./components/ButtonContainer"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from'./App.module.css'
import { useState } from "react"

function App() {
  
  const [calVal , setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if(buttonName === 'C'){
      setCalVal("");
    }else if(buttonName === '='){
      const result = eval(calVal);
      //eval() inbuilt method to pass a string to evaluate in maths..
      setCalVal(result);
    }else{
      const newCalVal = calVal + buttonName;
      setCalVal(newCalVal);
    }
    
  }
  return <>
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  </>
}

export default App
