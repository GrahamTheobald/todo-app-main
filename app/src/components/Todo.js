import React, {useState, useContext} from 'react'
import Delete from './Delete'
import Check from './Check'
import '../css/todo.css'
import { HandlerContext } from './App'

export default function Todo({todo}) {
  const {handleCheck} = useContext(HandlerContext)
  const [hover, setHover] = useState(false)
  return (
    <div 
      className={hover ? "todo hover" : "todo"}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="todo__left">
        <Check 
          id={todo.id}
          handler={handleCheck}
          complete={todo.complete}/>
        <div 
          className={todo.complete ? "todo__text complete" : "todo__text"}>
          {todo.text}</div>
      </div>
      <Delete id={todo.id}/>
    </div>
  )
}
