import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import "./App.scss"
import Spinner from "./components/Spinner";

const App : React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Spinner />} />
            <Route path="/about" element={
              <>
                <h2>Make something great!</h2>
                <Link className="App-link" to={"/"}>Home</Link>
              </>
            } />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
