import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {

  const [input , setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <div className="list-container">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos} 
          />
        </div> 
        <div>
          <TodoList todos={todos} setTodos={setTodos}/>
          {console.log(TodoList)}
        </div>
      </div>    
    </div>
  );
};

export default App;
