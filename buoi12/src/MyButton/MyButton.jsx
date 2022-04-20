import './MyButton.css'

const MyButton = (props) => {
  return (
    <div>
      <button 
        className={
          `MyButton 
          MyButton-${props.primary ? 'primary' : 'secondary'}
          MyButton-${props.size}
          `
        }
        style={{backgroundColor: props.backgroundColor}}
      >
        {props.label}
      </button>
    </div>
  )
}

export default MyButton
