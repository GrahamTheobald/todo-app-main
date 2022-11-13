import React from 'react'
import check from '../images/icon-check.svg'
import '../css/check.css'

export default function Check({complete}) {
  return (
    <div className={complete ? 'check complete' : 'check'}>
      <img src={check} alt="check"/>
    </div>
  )
}
