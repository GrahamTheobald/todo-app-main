import React, {useState} from 'react'
import '../css/add-todo.css'
import Check from './Check'
import {v4 as uuid} from 'uuid'

export default function AddToDo({handle}) {
  const BLANK = {id: uuid(), text: '', complete: false}
  const [newTodo, setNewTodo] = useState(BLANK)
  return (
    <div className="add-todo">
      <Check 
        complete={newTodo.complete}
        handler={() => setNewTodo({...newTodo, complete: !newTodo.complete})}/>
      <input 
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (!newTodo.text) return
            handle(newTodo)
            setNewTodo(BLANK)
          }
        }}
        onChange={(e) => setNewTodo({...newTodo, text:e.target.value})}
        type='text'
        value={newTodo.text} 
        placeholder='Create a todo...'/>
      {
        newTodo.text && 
        <div 
          onClick={() => {
            if (!newTodo.text) return
            handle(newTodo)
            setNewTodo(BLANK)
          }}
          className="add">
          Add
        </div>
      }
    </div>
  )
}
