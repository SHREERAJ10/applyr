import React from 'react'

function SortDropdown({sortBy, setSortBy}) {
  return (
    <div className="inline-block bg-gray-50 border border-gray-100 p-1 rounded-xl text-gray-900">
        <select name="Sort" id="sort" value={sortBy} onChange={e=>setSortBy(e.target.value)} className="focus:outline-none">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
        </select>
        
    </div>
  )
}

export default SortDropdown