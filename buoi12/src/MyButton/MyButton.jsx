import clsx from 'clsx'
import './MyButton.css'

const MyButton = (props) => {
  console.log(clsx(
    'MyButton',
    {
      'primary': props.primary,
      'secondary': !props.primary,
    },
    props.size
  ))
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
