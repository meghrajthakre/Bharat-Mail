import Calender from './Calender'
import Notes from './Notes'
import Tasks from './Tasks'

const RightSideBar = () => {
  return (
    <div className='hidden md:flex absolute right-6 mt-5  flex-col gap-8  '>
      <Calender/>
      <Notes/>
      <Tasks/>
    </div>
  )
}

export default RightSideBar
