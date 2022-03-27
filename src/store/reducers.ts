import { CREATE_TODO, REMOVE_TODO } from "./actions";
import { Todo, CreateTodoType, RemoveTodoType } from "./types";

type Action = CreateTodoType | RemoveTodoType

export const todos = (state : Todo[], action : Action) => {
    const { type, payload } = action
    switch (type) {
        case CREATE_TODO:
            return state.concat({
                id: Date.now(),
                text: payload.text,
                isCompleted: false
            })
        case REMOVE_TODO:
            return state.filter((todo : Todo) => todo.id !== payload)
        default:
           return state
    }
}