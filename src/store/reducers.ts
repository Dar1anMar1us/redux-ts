import { CREATE_TODO, REMOVE_TODO, FETCH_ALL_TODOS, UPDATE_TODO } from "./actions";
import { ICreateTodo, IRemoveTodo, IFetchAllTodos, IUpdateTodo, IState } from "./types";

type Action = ICreateTodo | IRemoveTodo | IFetchAllTodos | IUpdateTodo

const initialState = {
    todos: []
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
        default:
           return state
    }
}