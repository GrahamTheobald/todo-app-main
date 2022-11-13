import React from 'react'
import '../css/add-todo.css'
import Check from './Check'

export default function AddToDo() {
  return (
    <div className="add-todo">
      <Check/>
      <input type='text' placeholder='Create a todo...'/>
    </div>
  )
}
