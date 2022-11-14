import React, {useContext, useEffect, useState} from 'react'
import { HandlerContext } from './App'
import Todo from './Todo'

export const DragContext = React.createContext()

export default function ToDoList({todos}) {
  const {handleDragOrder} = useContext(HandlerContext)
  const [dragItem, setDragItem] = useState(null)
  const [dragOverItem, setDragOverItem] = useState(null)

  const DragContextValue = {
    handleDragItem,
    handleDragOverItem,
  }

  function handleDragItem(id) {
    setDragItem(id)
  }
  function handleDragOverItem(id) {
    setDragOverItem(id)
  }
  useEffect(() => {
    handleDragOrder(dragItem, dragOverItem)
  }, [dragItem, dragOverItem, handleDragOrder])

  return (
    <DragContext.Provider value={DragContextValue}>
    <div>
      { 
        todos.map((todo, index) => {
          return <Todo key={todo.id} todo={todo} index={index}/>
        })
      }
    </div>
    </DragContext.Provider>
  )
}
