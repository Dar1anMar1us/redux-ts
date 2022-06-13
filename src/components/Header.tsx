
const Header : React.FC = (props: any) => {

    const { title } = props
  
    return (
      <header>
        <h1>{title}</h1>
      </header>
    )
}
  
Header.defaultProps = {
    title: 'Todo App',
}

export default Header