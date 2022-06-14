import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchAllTodos, removeTodo, updateTodo } from "./store/actions"
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from "./pages/About"
import { RootState } from "./store/store"

const App : React.FC = () => {

  const [showAddTodo, setShowAddTodo] = useState(false)
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState | any) => state.trunk.todos, shallowEqual)

  useEffect(() => {
    dispatch(fetchAllTodos())
  }, [])

  const toggleAddTask = () => {
    setShowAddTodo(!showAddTodo)
  }

  return (
    <BrowserRouter>
      <div className='container'>
        <div className='header'>
          <Header />
          <Button
              color={showAddTodo ? 'red' : 'green'}
              text={showAddTodo ? 'Close' : 'Add'}
              onClick={toggleAddTask}
            />
        </div>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTodo && <AddTodo />}
                {todos.length > 0 ? (
                  <Todos
                    todos={todos}
                    onDelete={(id: number) => dispatch(removeTodo(id))}
                    onToggle={(id: number) => dispatch(updateTodo(id))}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
