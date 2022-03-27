export interface Todo {
    id: number,
    text: string,
    isCompleted: boolean
}

export interface CreateTodoType {
    type: "CREATE_TODO",
    payload: string
}

export interface RemoveTodoType {
    type: "REMOVE_TODO",
    payload: number
}