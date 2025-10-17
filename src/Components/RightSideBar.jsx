import Calender from './Calender'
import Notes from './Notes'
import Tasks from './Tasks'

const RightSideBar = () => {
  return (
    <div className='hidden sm:hidden lg:flex fixed right-6 mt-5  flex-col gap-8 z-50  lg:items-end'>
      <Calender/>
      <Notes/>
      <Tasks/>
    </div>
  )
}

export default RightSideBar
