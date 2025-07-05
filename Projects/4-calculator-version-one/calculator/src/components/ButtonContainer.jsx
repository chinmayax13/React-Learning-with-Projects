import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((btnName) => (
        <button className={styles.btn} onClick={() => onButtonClick(btnName)}>{btnName}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
