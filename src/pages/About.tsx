import { useSelector } from 'react-redux'
import Counter from '../components/Counter'
import { RootState } from '../store/store'

const About : React.FC = () => {
    const todos = useSelector((state : RootState | any) => state.trunk.todos)
    return (
        <>
            <p>About Page</p>
            <h4>Total number of todos: {todos.length}</h4>
            <Counter />
        </>
    )
}

export default About