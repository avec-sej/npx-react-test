import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () =>  setValue(prev => prev + 1);

  console.log("I run all the time");
  const runOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(runOnlyOnce, []);

  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
