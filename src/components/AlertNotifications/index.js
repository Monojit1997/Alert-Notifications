// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'

const listOfNotification = [
  {
    logo: <AiFillCheckCircle />,
    heading: 'Success',
    description: 'You can access all the files is this folder',
  },
  {
    logo: <RiErrorWarningFill />,
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    logo: <MdWarning />,
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    logo: <MdInfo />,
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div>
    <h1>Alert Notification</h1>
    <ul>
      {listOfNotification.map(eachItem => (
        <Notification>{eachItem}</Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
