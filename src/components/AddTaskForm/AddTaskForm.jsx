import React from 'react'
import './AddTaskForm.css'
const AddTaskForm = () => (
    <div className="AddTaskForm">
        <form>
            <input type="text" placeholder="What need to be done?" />
            <button>Add</button>
        </form>
    </div>
)

export default AddTaskForm
