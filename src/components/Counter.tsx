import { useSelector, useDispatch } from 'react-redux'
import { decrementCounter, incrementCounter } from '../store/actions'
import { RootState } from '../store/store'

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state: RootState | any) => state.trunk.counter)
    return (
        <div>
            <p>Counter: {counter}</p>
            <div>
                <button onClick={() => dispatch(incrementCounter())}>+</button>
                <button onClick={() => dispatch(decrementCounter())}>-</button>
            </div>
        </div>
    )
}

export default Counter