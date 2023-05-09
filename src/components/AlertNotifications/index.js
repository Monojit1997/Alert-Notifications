// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

const listOfNotification = [
  {
    logo: <AiFillCheckCircle />,
    id: 'success',
    heading: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    logo: <RiErrorWarningFill />,
    id: 'error',
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    logo: <MdWarning />,
    id: 'warning',
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    logo: <MdInfo />,
    id: 'info',
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div>
    <h1>Alert Notifications</h1>
    <ul>
      {listOfNotification.map(eachItem => (
        <Notification key={eachItem.id}>{eachItem}</Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
