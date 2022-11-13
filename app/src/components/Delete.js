import React, {useContext} from 'react'
import { HandlerContext } from './App'
import cross from '../images/icon-cross.svg'

export default function Delete({id}) {
  const {handleDelete} = useContext(HandlerContext)
  return (
    <div 
      onClick={() => handleDelete(id)}
      className="delete">
      <img src={cross} alt="delete"/>
    </div>
  )
}
