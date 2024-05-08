import React from 'react'
import './FilterItems.css'
const FilterItems = () => (
    <div className="FilterItems">
        <div>1 item left</div>
        <ul>
            <li>
                <button>All</button>
            </li>
            <li>
                <button>Active</button>
            </li>
            <li>
                <button>Completed</button>
            </li>
        </ul>
    </div>
)

export default FilterItems
