import React, {useContext} from 'react'
import { HandlerContext, SORT } from './App'
import '../css/order.css'

export default function Order({active}) {
  const {handleSort} = useContext(HandlerContext)
  return (
    <div className="order">
      <div
        onClick={() => handleSort(SORT.ALL)} 
        className={active===SORT.ALL ? "active" : ""}>
        All
      </div>
      <div
        onClick={() => handleSort(SORT.ACTIVE)} 
        className={active===SORT.ACTIVE ? "active" : ""}>
        Active
      </div>
      <div 
        onClick={() => handleSort(SORT.COMPLETE)} 
        className={active===SORT.COMPLETE ? "active" : ""}>
        Completed
      </div>
    </div>
  )
}
