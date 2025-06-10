import React from 'react'

function SortDropdown({sortBy, setSortBy}) {
  return (
    <div className="border border-black inline-block bg-gray-100">
        <select name="Sort" id="sort" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
        </select>
        
    </div>
  )
}

export default SortDropdown