import { CREATE_TODO, REMOVE_TODO, FETCH_ALL_TODOS, UPDATE_TODO, INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actions";
import { ICreateTodo, IRemoveTodo, IFetchAllTodos, IUpdateTodo, IState, IIncrementCounter, IDecrementCounter } from "./types";

type Action = ICreateTodo | IRemoveTodo | IFetchAllTodos | IUpdateTodo | IIncrementCounter | IDecrementCounter

const initialState = {
    todos: [],
    counter: 1
}

export const trunk = (state : IState = initialState, action : Action) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_ALL_TODOS:
            return {
                todos: [...payload]
            }
        case CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case REMOVE_TODO:
            return {
                todos: state.todos.filter((todo) => todo.id !== payload)
            }
        case UPDATE_TODO:
            return {
                todos: state.todos.map((todo) => (
                    todo.id === payload ? {...todo, reminder: !todo.reminder} : todo
                ))
            }
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter ? state.counter + 1 : 1
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter ? state.counter - 1 : 0 - 1
            }
        default:
           return state
    }
}