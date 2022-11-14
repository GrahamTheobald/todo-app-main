import React, {useState, useContext} from 'react'
import Delete from './Delete'
import Check from './Check'
import { HandlerContext, SORT } from './App'
import { DragContext } from './ToDoList'
import '../css/todo.css'

export default function Todo({todo, index}) {
  const {handleCheck, sort} = useContext(HandlerContext)
  const {handleDragItem, handleDragOverItem} = useContext(DragContext)
  const [hover, setHover] = useState(false)
  const [drag, setDrag] = useState(false)

  let render
  switch(sort) {
    case SORT.COMPLETE:
      render = todo.complete === true
      break
    case SORT.ACTIVE:
      render = todo.complete === false
      break
    default:
      render = true
  }

  let style = "todo"
  style += hover ? " hover" : ""
  style += drag ? " drag" : ""

  return (
    <> 
      {render && 
        <div
          onDrag={() => {
            setDrag(true)
            handleDragItem(index)
          }} 
          onDragEnter={() => handleDragOverItem(index)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnd={() => setDrag(false)}
          draggable
          className={style}
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
      }
    </>
  )
}
