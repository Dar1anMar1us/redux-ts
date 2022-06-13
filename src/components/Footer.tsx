import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <Link to='/about'>About</Link>
      <>&nbsp;&nbsp;&nbsp;</>
      <Link to='/'>Home</Link>
    </footer>
  )
}

export default Footer