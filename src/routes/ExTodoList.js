import { useState, useEffect } from "react";
import styles from "../css/Todo.module.css";

function Todo() {
  const[toDo, setTodo] = useState("");  
  const[toDos, setTodos] = useState([]);
  const[login, setLogin] = useState("");
  const[isLogin, setCss] = useState(false);
  
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo == ""){
      return;
    }
    setTodos(currentArray => [toDo, ...currentArray]);
    setTodo("");
  };
  const onStyle = (event) => {
    event.preventDefault();
    if(login == "") {
      console.log("Enter your Name");
    }else{
      setCss(true);
    };
    
  };
  const onLogin = (event) => {
    event.preventDefault();
    setLogin(event.target.value);
  };
  
  
  return (
    <div>
      <h1>My To Do List({toDos.length})</h1>
      <form className={isLogin? styles.hidden : styles.normal} onSubmit={onStyle}>
        <input 
          required
          maxLength={15}
          type="text"
          placeholder="Type your name"
          value={login || ""}
          onChange={onLogin}
        />
        <button onClick={onStyle}>Log in</button>
      </form>
      <h3 className={isLogin? styles.normal : styles.hidden} id="greeting">Welcome {login}!</h3>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo} 
          onChange={onChange} 
          type="text" 
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map(
          (item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default Todo;
