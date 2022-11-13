import React from 'react'
import cross from '../images/icon-cross.svg'
// import '../css/app.css'

export default function Delete() {
  return (
    <div className="delete">
      <img src={cross} alt="delete"/>
    </div>
  )
}
