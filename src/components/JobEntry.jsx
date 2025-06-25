import React from 'react'
import StatusTag from './statusTag'

function JobEntry({title, subtitle, status, onClick}) {

  const tagColorObj = {
    Interview:['bg-blue-100','text-blue-700'],
    Offered:['bg-green-100','text-green-700'],
    Wishlist:['bg-violet-100','text-violet-700'],
    Pending:['bg-yellow-100','text-yellow-700'],
    Rejected:['bg-red-100','text-red-700']
  }

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