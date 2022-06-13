

const Button = (props: any) => {

    const { color, text, onClick } = props

    return (
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className='btn'
      >
        {text}
      </button>
    )
}

export default Button