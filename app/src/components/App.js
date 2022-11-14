import React, {useState, useEffect} from 'react'
import light from '../images/icon-moon.svg'
import dark from '../images/icon-sun.svg'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import Order from './Order'
import data from '../data.json'
import '../css/app.css'

const STORAGE_KEY = 'todo-app-main'
export const SORT = {ALL:'all', ACTIVE:'active', COMPLETE:'complete'}
export const HandlerContext = React.createContext()

function App() {
  const [darkTheme, setDarkTheme] = useState()
  const [todos, setTodos] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [sort, setSort] = useState(SORT.ALL)

  const HandlerContextValue = {
    handleCheck,
    handleDelete,
    handleSort,
    handleDragOrder,
    sort
  }

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
    initialTheme()
    initialTodos()
  }, [])

  useEffect(() => {
    if (darkTheme == undefined) return
    localStorage.setItem(`${STORAGE_KEY}-theme`, darkTheme)
  }, [darkTheme])

  useEffect(() => {
    if (todos.length === 0) return 
    localStorage.setItem(`${STORAGE_KEY}-todos`, JSON.stringify(todos))
  }, [todos])
 
  function initialTheme() {
    const storageTheme = JSON.parse(localStorage.getItem(`${STORAGE_KEY}-theme`))
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkTheme(storageTheme == undefined ? defaultDark : storageTheme)
  }

  function initialTodos() {
    const storageTodos = JSON.parse(localStorage.getItem(`${STORAGE_KEY}-todos`))
    setTodos(storageTodos || data)
  }

  function handleDragOrder(dragItem, dragOverItem) {
    if (dragItem === dragOverItem) return
    const _todos = [...todos]
    const removed = _todos.splice(dragItem, 1)
    _todos.splice(dragOverItem, 0, ...removed)
    setTodos(_todos)
  }

  function handleAddTodo(todo) {
    const _todos = [...todos]
    _todos.push(todo)
    setTodos(_todos)
  }

  function handleCheck(id) {
    const _todos = [...todos]
    const index = _todos.findIndex(t => t.id === id)
    _todos[index].complete = !_todos[index].complete
    setTodos(_todos)
  }

  function handleDelete(id) {
    const _todos = [...todos]
    setTodos(_todos.filter(t => t.id !== id))
  }

  function handleClearCompleted() {
    const _todos = [...todos]
    setTodos(_todos.filter(t => !t.complete))
  }

  function handleSort(sort) {
    setSort(sort)
  }

  const modeIcon = darkTheme ? dark : light
  const itemsLeft = todos.reduce((count, todo) => {
    if (!todo.complete) count += 1
    return count
  }, 0)

  return (
    <HandlerContext.Provider value={HandlerContextValue}>
    <div data-theme={darkTheme ? 'dark' : ''} className='container'>
      <div className='app'>
        <header className="header">
          <h1>Todo</h1>
          <img 
            onClick={() => setDarkTheme(!darkTheme)}
            src={modeIcon} 
            alt="theme toggle"/>
        </header>
        <AddToDo handle={handleAddTodo}/>
        <div className="list">
          <ToDoList todos={todos}/>
          <div className="list__footer">
            <div>{itemsLeft} items left</div>
            { 
              windowWidth >= 600 && 
              <Order active={sort} width="wide"/>
            }
            <div 
              onClick={() => handleClearCompleted()}
              className="list__footer__button">Clear Completed</div>
          </div>
        </div>
        {
          windowWidth < 600 &&
          <Order active={sort}/>
        }
        <div className="footer">
          Drag and drop to reorder list
        </div>
      </div>
    </div>
    </HandlerContext.Provider>
  );
}

export default App;
