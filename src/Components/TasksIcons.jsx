import { Icon } from '@iconify/react'
import React from 'react'

const TasksIcons = ({ setOpenTask, opentask }) => {
    return (
        <div>
            <Icon
                onClick={() => setOpenTask(!opentask)}
                icon="mdi:check-circle-outline"
                width="35" height="35" color="#1A73E8"
                className='cursor-pointer ml-1 pr-1'
            />

        </div>
    )
}

export default TasksIcons
