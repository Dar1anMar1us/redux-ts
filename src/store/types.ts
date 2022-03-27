export interface Todo {
    id: number,
    text: string,
    isCompleted: boolean
}

export interface CreateTodoType {
    type: "CREATE_TODO",
    payload: Todo
}

export interface RemoveTodoType {
    type: "REMOVE_TODO",
    payload: number
}