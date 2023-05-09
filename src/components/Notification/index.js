// Write your code here
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  const {logo, heading, description} = children
  return (
    <li>
      {logo}
      <div>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
      <GrFormClose />
    </li>
  )
}

export default Notification
