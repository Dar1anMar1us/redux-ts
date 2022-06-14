import { Todo } from "./types"
import { Dispatch } from 'redux';
import { addTodo, deleteTodo, fetchTodos, toggleReminder } from "../utils/requests";

export const FETCH_ALL_TODOS = "FETCH_ALL_TODOS"
export const fetchAllTodos = () => {
    return (
        (dispatch: Dispatch | any) => {
            fetchTodos()
            .then((todos) => dispatch({
                type: FETCH_ALL_TODOS,
                payload: todos
            }))
            .catch(err => err)
        }
    )
}

export const FETCH_TODO = "FETCH_TODO"
export const fetchTodo = (todo: Todo) => ({
    type: FETCH_TODO,
    payload: todo
})

export const CREATE_TODO = "CREATE_TODO"
export const createTodo = (todo: Todo) => {
    return (
        (dispatch: Dispatch | any) => {
            addTodo(todo).then(() => dispatch({
                type: CREATE_TODO,
                payload: todo
            }))
            .then(() => dispatch(fetchAllTodos()))
            .catch(err => err)
        }
    )
}

export const REMOVE_TODO = "REMOVE_TODO"
export const removeTodo = (id : number) => {
    return (
        (dispatch: Dispatch | any) => {
            deleteTodo(id)
            .then(() => dispatch({
                type: REMOVE_TODO,
                payload: id
            }))
            .then(() => dispatch(fetchAllTodos()))
            .catch(err => err)
        }
    )
}

export const UPDATE_TODO = "UPDATE_TODO"
export const updateTodo = (id : number) => {
    return (
        (dispatch: Dispatch | any) => {
            toggleReminder(id)
            .then(() => dispatch({
                type: UPDATE_TODO,
                payload: id
            }))
            .then(() => dispatch(fetchAllTodos()))
            .catch(err => err)
        }
    )
}