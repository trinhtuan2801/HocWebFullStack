import clsx from 'clsx'
import './MyButton.css'

const MyButton = (props) => {

  return (
    <div>
      <button
        className={
          clsx(
            'MyButton',
            {
              'primary': props.primary,
              'secondary': !props.primary,
            },
            props.size
          )
        }
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.label}
      </button>
    </div>
  )
}



export default MyButton
