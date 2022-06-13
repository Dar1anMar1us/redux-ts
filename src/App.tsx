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

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState<any>([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task: any) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

  }

  // Delete Task
  const deleteTask = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setTasks(tasks.filter((task: any) => task.id !== id))
      : console.log('Error Deleting This Task')
  }

  // Toggle Reminder
  const toggleReminder = async (id: number) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task: any) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <BrowserRouter>
      <div className='container'>
        <div className='header'>
          <Header />
          <Button
              color={showAddTask ? 'red' : 'green'}
              text={showAddTask ? 'Close' : 'Add'}
              onClick={toggleAddTask}
            />
        </div>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTodo onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Todos
                    todos={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
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
