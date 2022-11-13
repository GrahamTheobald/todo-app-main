import React from 'react'
import check from '../images/icon-check.svg'
import '../css/check.css'

export default function Check({complete, handler, id}) {
  return (
    <div 
      onClick={() => handler(id)}
      className={complete ? 'check complete' : 'check'}>
      <img src={check} alt="check"/>
    </div>
  )
}
