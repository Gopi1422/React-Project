import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <div>
      <h4 className='my-3'>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}

// onDelete - function pass
// onDelete() - function call
// () => {onDelete(todo)} - created a new arrow function inside that call the function, then pass arrow function
