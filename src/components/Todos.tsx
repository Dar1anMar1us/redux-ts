import Todo from './Todo'

const Todos = (props: any) => {

    const { todos, onDelete, onToggle } = props

    return (
        <>
        {todos.map((todo: any, index: number) => (
            <Todo key={index} todo={todo} onDelete={onDelete} onToggle={onToggle} />
        ))}
        </>
    )
}

export default Todos