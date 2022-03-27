import { createStore, combineReducers } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { todos } from "./reducers"

const reducers = {
    todos
}

const persistConfig = {
    key: "root",
    storage
  }

const rootReducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => {
    const store = createStore(persistedReducer)
    const persistor = persistStore(store)
    return { store, persistor }
}