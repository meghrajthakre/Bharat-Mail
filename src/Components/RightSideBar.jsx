import { useState } from 'react'
import Calender from './Calender'
import Notes from './Notes'
import Tasks from './Tasks'

const RightSideBar = () => {
  const [active, setActive] = useState(null) // null = sab band

  return (
    <div className="hidden sm:hidden lg:flex fixed right-5 mt-5 flex-col gap-8 z-50 lg:items-end">
      <Calender
        isOpen={active === 'calender'}
        onToggle={() => setActive(active === 'calender' ? null : 'calender')}
      />
      <Notes
        isOpen={active === 'notes'}
        onToggle={() => setActive(active === 'notes' ? null : 'notes')}
      />
      <Tasks
        isOpen={active === 'tasks'}
        onToggle={() => setActive(active === 'tasks' ? null : 'tasks')}
      />
    </div>
  )
}

export default RightSideBar
