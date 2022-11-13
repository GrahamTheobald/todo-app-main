import React from 'react'
import '../css/order.css'

export default function Order({active}) {
  return (
    <div className="order">
      <div className={active==="all" ? "active" : ""}>
        All
      </div>
      <div className={active==="active" ? "active" : ""}>
        Active
      </div>
      <div className={active==="completed" ? "active" : ""}>
        Completed
      </div>
    </div>
  )
}
