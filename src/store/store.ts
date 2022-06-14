import { createStore, combineReducers, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import { trunk } from "./reducers"

const reducers = {
    trunk
}

const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export const configureStore = () => {
    const store = createStore(persistedReducer, applyMiddleware(thunk))
    const persistor = persistStore(store)
    return { store, persistor }
}