import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Coin from "./routes/ExCoinTracker";
import Todo from "./routes/ExTodoList";
import Cleanup from "./routes/ExCleanUp";

function App() {
  
  return <Router>
    <Routes>
      <Route path="movie/:id" element={<Detail />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/coin" element={<Coin />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="/cleanup" element={<Cleanup />}></Route>
    </Routes>
  </Router>;
}

export default App;
