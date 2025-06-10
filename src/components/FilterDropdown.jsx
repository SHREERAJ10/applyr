import React from 'react'

function FilterDropdown({filterBy, setFilterBy}) {
  return (
    <div className="border border-black inline-block bg-gray-100">
        <select name="Filter" id="filter" value={filterBy} onChange={e=>setFilterBy(e.target.value)}>
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