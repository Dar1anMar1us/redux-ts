import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { configureStore } from "./store/store"
import "./index.scss"
import App from "./App"

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store} >
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
