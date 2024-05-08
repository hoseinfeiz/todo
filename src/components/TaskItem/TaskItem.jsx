import React from 'react'
import './TaskItem.css'
import { RxCross2 } from 'react-icons/rx'
const TaskItem = () => (
    <li className="TaskItem">
        <input type="text" />
        <div className="DeleteTask">
            <RxCross2 />
        </div>
    </li>
)

export default TaskItem
