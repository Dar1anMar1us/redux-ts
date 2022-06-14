// Fetch all tasks
export const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    return data
}

// Fetch Task
export const fetchTask = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
}

// Add Task
export const addTask = async (task: any) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    return data
}

// Delete Task
export const deleteTask = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
    })
    // res.status === 200
    //     ? setTasks(tasks.filter((task: any) => task.id !== id))
    //     : console.log('Error Deleting This Task')
}

// Toggle Reminder
export const toggleReminder = async (id: number) => {
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

    return data

    // setTasks(
    //     tasks.map((task: any) =>
    //     task.id === id ? { ...task, reminder: data.reminder } : task
    //     )
    // )
}
