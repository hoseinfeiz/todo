import React from 'react'
import { AddTaskForm, TaskItemsList, FilterItems } from '../'
import './TodoApp.css'
const TodoApp = () => {
    return (
        <div className="TodoApp">
            <AddTaskForm />
            <TaskItemsList />
            <FilterItems />
        </div>
    )
}

export default TodoApp
