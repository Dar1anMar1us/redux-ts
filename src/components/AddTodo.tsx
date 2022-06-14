import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo, fetchAllTodos } from '../store/actions'
import { addTask } from '../utils/requests'

const AddTask = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a todo')
            return
        }

        const todo = { text, day, reminder }

        Promise.all([
            dispatch(createTodo(todo))
        ]).then(() => {
            setText('')
            setDay('')
            setReminder(false)
        })

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Todo</label>
                <input
                type='text'
                placeholder='Add Todo'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                type='text'
                placeholder='Add Day & Time'
                value={day}
                onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                type='checkbox'
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask