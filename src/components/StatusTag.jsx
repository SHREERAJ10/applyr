import React from 'react'

function StatusTag({status}) {
    const tagColorObj = {
        Interview: ['bg-blue-100', 'text-blue-700'],
        Offered: ['bg-green-100', 'text-green-700'],
        Wishlist: ['bg-violet-100', 'text-violet-700'],
        Pending: ['bg-yellow-100', 'text-yellow-700'],
        Rejected: ['bg-red-100', 'text-red-700']
    }
    status = status==undefined?"Pending":status;

    return (
        <div>
            <span className={`${tagColorObj[status][0]}  ${tagColorObj[status][1]} font-medium text-sm py-1 px-2 rounded-xl`}>{status}</span>
        </div>
    )
}

export default StatusTag