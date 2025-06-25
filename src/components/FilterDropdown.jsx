import React from 'react'

function FilterDropdown({filterBy, setFilterBy}) {
  return (
    <div className="flex items-center bg-gray-100 border border-gray-100 rounded-xl text-gray-900">
        <select name="Filter" id="filter" value={filterBy} onChange={e=>setFilterBy(e.target.value)} className="focus:outline-none">
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="interview">Interview</option>
            <option value="offered">Offered</option>
            <option value="rejected">Rejected</option>
            <option value="wishlist">Wishlist</option>
        </select>
    </div>
  )
}

export default FilterDropdown