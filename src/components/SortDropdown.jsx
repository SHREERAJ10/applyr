import React from 'react'

function SortDropdown({sortBy, setSortBy}) {
  return (
    <div className="bg-gray-100 border border-gray-100 rounded-xl text-gray-900 flex items-center">
        <select name="Sort" id="sort" value={sortBy} onChange={e=>setSortBy(e.target.value)} className="focus:outline-noner flex justify-center items-center">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
        </select>    
    </div>
  )
}

export default SortDropdown