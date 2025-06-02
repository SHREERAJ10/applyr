import React from 'react'

function CancelBtn({setCardShown}) {
  return (
    <div>
        <button className="p-2 cursor-pointer" onClick={()=>{
            setCardShown(false);
        }}>
            Cancel
        </button>
    </div>
  )
}

export default CancelBtn