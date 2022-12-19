import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
  let myStyle = {
    minHeight: "100vh"
  }
  let s={
    color:'green'
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3' style={s}>My Todos</h3>
      {
        props.todos.length === 0 ? "No tasks to display" :
          props.todos.map((todo) => {
            return <Todo todo={todo} key={todo.s} onDelete={props.onDelete} completedTodo={props.completedTodo} />
          })
      }

    </div>
  )
}

export default Todos
