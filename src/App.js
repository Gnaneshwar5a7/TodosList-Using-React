import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import About from './components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState("")

  useEffect(() => {
    const inittodos = JSON.parse(localStorage.getItem('todos'))
    if (inittodos) {
      setTodos(inittodos);
    }
  }, []);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const checks = () => {
    let check = document.getElementsByClassName('form-check-input mx-3')
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].status === '0') {
        check[i].checked = false
      }
      else {
        check[i].checked = true
      }
    }
  }
  document.addEventListener('mousemove', () => {
    checks()
  })
  document.addEventListener('scroll', () => {
    checks()
  })
  const completedTodo = (todo) => {
    let check = document.getElementsByClassName('form-check-input mx-3')
    console.log(todo)
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] === todo) {
        if (todos[i].status === '0') {
          todos[i].status = '1'
        }
        else {
          todos[i].status = '0'
        }
      }
      if (todos[i].status === '0') {
        check[i].checked = false
      }
      else {
        check[i].checked = true
      }
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let s;
    if (todos.length === 0) {
      s = 1;
    }
    else {
      s = todos[todos.length - 1].s + 1
    }
    const myTodo = {
      s: s,
      title: title,
      desc: desc,
      status: '0'
    }
    setTodos([...todos, myTodo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="Todos List" />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} completedTodo={completedTodo} />
            </>
          } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
