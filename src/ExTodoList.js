import { useState, useEffect } from "react";

function App() {
  const[toDo, setTodo] = useState("");  
  const[toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo == ""){
      return;
    }
    setTodos(currentArray => [toDo, ...currentArray]);
    setTodo("");
  };
  
  return (
    <div>
      <h1>My To Do List({toDos.length})</h1>
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

//export default App;
