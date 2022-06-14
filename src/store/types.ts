export interface Todo {
    id?: number,
    text: string,
    day: string,
    reminder: boolean
}

export interface FetchAllTodosType {
    type: "FETCH_ALL_TODOS",
    payload: Todo[]
}

export interface CreateTodoType {
    type: "CREATE_TODO",
    payload: Todo
}

export interface RemoveTodoType {
    type: "REMOVE_TODO",
    payload: number
}