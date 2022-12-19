import React from 'react'
const todo = ({ todo, onDelete, completedTodo }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      <input className="form-check-input mx-3" type="checkbox" value="" onClick={() => { completedTodo(todo) }} />
      <label className="form-check-label" htmlFor="flexCheckChecked" onClick={() => { completedTodo(todo) }}>Completed</label>
      <hr />
    </div>
  )
}

export default todo
