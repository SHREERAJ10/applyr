import React from 'react'
import StatusTag from './StatusTag'

function JobEntry({title, subtitle, status, onClick}) {

  return (
    <div className="w-[90%] lg:bg-neutral-50 flex items-center justify-between border-b-1 border-gray-400 p-2 cursor-pointer hover:bg-gray-50" onClick={onClick}>
        <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-900">{title}</span>
            <span className="text-gray-800">{subtitle}</span>
        </div>
        <div>
            <StatusTag status = {status} />
        </div>

    </div>
  )
}

export default JobEntry