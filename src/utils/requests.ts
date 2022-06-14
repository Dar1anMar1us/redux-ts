// Fetch all todos
export const fetchTodos = async () => {
    const res = await fetch('http://localhost:5000/todos')
    const data = await res.json()
    
    return data
}

// Fetch Todo
export const fetchTodo = async (id: number) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`)
    const data = await res.json()

    return data
}

// Add Todo
export const addTodo = async (todo: any) => {
    const res = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(todo),
    })

    const data = await res.json()

    return data
}

// Delete Todo
export const deleteTodo = async (id: number) => {
    fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
    })
}

// Toggle Reminder
export const toggleReminder = async (id: number) => {
    const taskToToggle = await fetchTodo(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PUT',
        headers: {
        'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
    })

    const data = await res.json()

    return data
}
