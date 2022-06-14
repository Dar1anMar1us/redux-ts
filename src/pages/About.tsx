import { useState, useEffect } from "react"

const About : React.FC = () => {

    const [todos, setTodos] = useState<any>([])
    const [counter, counterSet] = useState(0)

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:5000/todos')
            const data = await res.json()
            setTodos(data)
        })()
    }, [])

    return (
        <>
            <p>About Page</p>
            <h4>Total number of todos: {todos.length}</h4>
            <div>
                <p>Counter: {counter}</p>
                <div>
                    <button onClick={() => counterSet(counter+1)}>+</button>
                    <button onClick={() => counterSet(counter-1)}>-</button>
                </div>
            </div>
        </>
    )
}

export default About