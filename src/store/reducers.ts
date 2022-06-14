import { CREATE_TODO, REMOVE_TODO, FETCH_ALL_TODOS } from "./actions";
import { Todo, CreateTodoType, RemoveTodoType, FetchAllTodosType } from "./types";

type Action = CreateTodoType | RemoveTodoType | FetchAllTodosType

export const todos = (state : Todo[] = [], action : Action) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_ALL_TODOS:
            return {
                ...payload
            }
        case CREATE_TODO:
            console.log(payload)
            console.log(state)
            return {
                ...state,
                payload
            }
            
        // case REMOVE_TODO:
            
        default:
           return state
    }
}