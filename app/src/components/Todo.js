import React, {useState} from 'react'
import Delete from './Delete'
import Check from './Check'
import '../css/todo.css'

export default function Todo({todo}) {
  const [hover, setHover] = useState(false)

  return (
    <div 
      className={hover ? "todo hover" : "todo"}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="todo__left">
        <Check complete={todo.complete}/>
        <div 
          className={todo.complete ? "todo__text complete" : "todo__text"}>
          {todo.text}</div>
      </div>
      <Delete/>
    </div>
  )
}
