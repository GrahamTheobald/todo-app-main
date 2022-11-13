import React, {useState, useEffect} from 'react'
import light from '../images/icon-moon.svg'
import dark from '../images/icon-sun.svg'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import Order from './Order'
import data from '../data.json'
import { v4 as uuid} from 'uuid'
import '../css/app.css'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [darkTheme, setDarkTheme] = useState(defaultDark)
  const [todos, setTodos] = useState(data)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
  }, [])

  const modeIcon = darkTheme ? dark : light
  const itemsLeft = todos.reduce((count, todo) => {
    if (!todo.complete) count += 1
    return count
  }, 0)

  return (
    <div data-theme={darkTheme ? 'dark' : ''} className='container'>
      <div className='app'>
        <header className="header">
          <h1>Todo</h1>
          <img src={modeIcon} alt="theme toggle"/>
        </header>
        <AddToDo/>
        <div className="list">
          <ToDoList todos={todos}/>
          <div className="list__footer">
            <div>{itemsLeft} items left</div>
            { 
              windowWidth >= 600 && 
              <Order active="all" width="wide"/>
            }
            <div className="list__footer__button">Clear Completed</div>
          </div>
        </div>
        {
          windowWidth < 600 &&
          <Order active="all"/>
        }
        <div className="footer">
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  );
}

export default App;
