import React, {useContext} from 'react'
import { HandlerContext, SORT } from './App'
import Todo from './Todo'

export default function ToDoList({todos}) {
  const {sort} = useContext(HandlerContext)
  return (
    <div>
      { 
        todos.filter(todo => {
          if (sort === SORT.ACTIVE) {
            return todo.complete === false
          }
          else if (sort === SORT.COMPLETE) {
            return todo.complete === true
          }
          else return true
        }).map(todo => {
          return <Todo key={todo.id} todo={todo}/>
        })
      }
    </div>
  )
}
