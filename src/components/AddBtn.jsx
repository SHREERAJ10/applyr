import React from 'react'

function AddBtn({showJobCard}) {
  return (
    <div>
        <button className="p-6 cursor-pointer" onClick={showJobCard}>+</button>
    </div>
  )
}

export default AddBtn