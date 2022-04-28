// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import AddTodo from './MyComponents/AddTodo';
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);

    console.log(myTodo);

  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    // localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />
        <Routes>
          <Route path="/" element={<><AddTodo addTodo={addTodo} /><Todos todos={todos} onDelete={onDelete} /> </>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

// element={() => 
//   <div>
//   <AddTodo addTodo={addTodo} />
//   <Todos todos={todos} onDelete={onDelete} />
//   </div>
// }

export default App;

// {
//   sno: 1,
//   title: 'Go to the market',
//   desc: 'You need to go to the market to get this job done.'
// },
// {
//   sno: 2,
//   title: 'Go to the mall',
//   desc: 'You need to go to the mall to get this job done.'
// },
// {
//   sno: 3,
//   title: 'Go to the college',
//   desc: 'You need to go to the college to get this job done.'
// }

// 6 times
// no suggestion