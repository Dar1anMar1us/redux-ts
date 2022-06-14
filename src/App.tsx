import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from "./pages/About"

const App : React.FC = () => {

  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todos, setTodos] = useState<any>([])

  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos()
      setTodos(todosFromServer)
    }

    getTodos()
  }, [])

  // Fetch Todos
  const fetchTodos = async () => {
    const res = await fetch('http://localhost:5000/todos')
    const data = await res.json()

    return data
  }

  // Fetch Todo
  const fetchTodo = async (id: number) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`)
    const data = await res.json()

    return data
  }

  // Add Todo
  const addTodo = async (todo: any) => {
    const res = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(todo),
    })

    const data = await res.json()

    setTodos([...todos, data])

  }

  // Delete Todo
  const deleteTodo = async (id: number) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setTodos(todos.filter((todo: any) => todo.id !== id))
      : console.log('Error Deleting This Todo')
  }

  // Toggle Reminder
  const toggleReminder = async (id: number) => {
    const todoToToggle = await fetchTodo(id)
    const updTodo = { ...todoToToggle, reminder: !todoToToggle.reminder }

    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTodo),
    })

    const data = await res.json()

    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, reminder: data.reminder } : todo
      )
    )
  }

  const toggleAddTodo = () => {
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
              onClick={toggleAddTodo}
            />
        </div>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTodo && <AddTodo onAdd={addTodo} />}
                {todos.length > 0 ? (
                  <Todos
                    todos={todos}
                    onDelete={deleteTodo}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No Todos To Show'
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
