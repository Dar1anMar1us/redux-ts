import { createStore, combineReducers, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import { todos } from "./reducers"

const reducers = {
    todos
}

const persistConfig = {
    key: "root",
    storage
}

const initialState = {}

const rootReducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => {
    const store = createStore(persistedReducer, initialState, applyMiddleware(thunk))
    const persistor = persistStore(store)
    return { store, persistor }
}