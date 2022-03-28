import { Link } from "react-router-dom"
import logo from ".././logo.svg"

const Spinner : React.FC = () => {
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <Link className="App-link" to={"/about"}>About Page</Link>
        </>
    )
}

export default Spinner