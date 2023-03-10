import React, {useState} from "react";
import "./App.css";
import Todo from "./components/Todo";
import FormTodo from "./components/FormTodo";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  console.log(todos);

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo,index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index = {index}
                todo = {todo}
                markTodo = {markTodo}
                removeTodo = {removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
