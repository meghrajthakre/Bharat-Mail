import { Icon } from '@iconify/react';
import React from 'react';

const TasksIcons = ({ setOpenTask, opentask }) => {
    return (
        <div
            onClick={() => setOpenTask(opentask ? null : "tasks")} // fix toggle logic
            className='relative group cursor-pointer p-2 flex items-center justify-center transition-transform hover:scale-110'
        >
            <Icon
                icon="mdi:check-circle-outline"
                width="28"
                height="28"
                color={opentask ? "#1A73E8" : "#888"} // optional: show active/inactive state
            />
        </div>
    )
}

export default TasksIcons;
