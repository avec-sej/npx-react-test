import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () =>  setValue(prev => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  //console.log("I run all the time");
  const runOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(runOnlyOnce, []); // []이 비어있어서 한번만 실행됨
  useEffect(() => {
    if(keyword !== "" && keyword.length > 4){
      console.log("Search for ", keyword);
    } 
  }, [keyword]); //keyword가 변할때만 이 코드 실행
  useEffect(() => {
      console.log("I only run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter' & 'keyword' change");
}, [counter, keyword]);

  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange}
      type="text" 
      placeholder="Search here..." 
      />
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
