import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './TaskItemsList.css'
const TaskItemsList = () => (
    <ul className="TaskItemsList">
        <TaskItem />
        <TaskItem />
    </ul>
)

export default TaskItemsList
