export interface Todo {
    id?: number,
    text: string,
    day: string,
    reminder: boolean
}

export interface IState {
    todos: Todo[],
    counter: number
}

export interface IFetchAllTodos {
    type: "FETCH_ALL_TODOS",
    payload: Todo[]
}

export interface ICreateTodo {
    type: "CREATE_TODO",
    payload: Todo
}

export interface IUpdateTodo {
    type: "UPDATE_TODO",
    payload: number
}

export interface IRemoveTodo {
    type: "REMOVE_TODO",
    payload: number
}

export interface IIncrementCounter {
    type: "INCREMENT_COUNTER",
    payload: number
}

export interface IDecrementCounter {
    type: "DECREMENT_COUNTER",
    payload: number
}