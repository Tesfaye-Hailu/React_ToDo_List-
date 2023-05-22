import Header from "./Components/Header";
import Form from "./Components/Form";
import { useState } from "react";
//import styles from './style.module.css';



function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState ([]);
  return (
    <div className="App">
      <Header/>
      <Form
      todo={todo} 
      setTodo={setTodo} 
      todoList={todoList} 
      setTodoList={setTodoList}/>
     </div>
  );
}

export default App;
