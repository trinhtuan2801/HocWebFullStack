import './Dropdown.css'

const Dropdown = (props) => {
  return (
    <div>
      <div className='dropdown'>
        <div className='dropbtn'>Dropdown</div>
        <div className='dropdown-content'>
          {props.options.map((option, index)=>(
            <span key={index}>{option}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dropdown