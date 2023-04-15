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
}, [counter, keyword ]); //여러개도 가능

/* cleanUp */
  const[showing, setShowing] = useState(false); 
  const onShowClick = () => setShowing((prev) => !prev);
  function Hello(){
    /* How it works ==>
    function createFn(){
      console.log("Hello created :)");
      return destroyFn;
    }
    function destroyFn(){
      console.log("destroyed ..");
    }
    useEffect(createFn, []);
    */

    useEffect(() => {
      console.log("Hello created :)");
      return () => console.log("destroyed .."); //cleanUp function
    }, []);
    return <h1>HELLO</h1>;
  }

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

      <h1>CleanUp==========</h1>
      <button onClick={onShowClick}>{showing? "hide": "show"}</button>
      {showing? <Hello /> : null}
    </div>
  );
}

export default App;
