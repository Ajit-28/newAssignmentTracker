import React from 'react'
import '../pages/assigenments/assignment.css'

export default function GlobalFilter({ filter, setFilter }) {
    return (
        <div className="filterContainer">
            <div className='searchbar'>
                Search: {' '}
                <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} 
                className='input'
                />
            </div>
        </div>
    )
}
