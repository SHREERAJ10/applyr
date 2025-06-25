import React from 'react'

function Backdrop({onClick, hide}) {
    return (
        <div className={`w-full h-full bg-black opacity-25 fixed top-0 left-0 z-10 ${hide}`} onClick={onClick}>
        </div>
    )
}

export default Backdrop