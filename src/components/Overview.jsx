import React from 'react'
import JobStatus from './JobStatus'
import { v4 as uuidv4 } from 'uuid';

function Overview({ getData }) {

    const cardDataRow1 = [
        { title: "total", id: uuidv4(), bgColor:"bg-blue-50", numberColor:"text-slate-800" }, 

        { title: "Offered", id: uuidv4(), bgColor:"bg-orange-50", numberColor:"text-orange-500"  },

        { title: "Interview", id: uuidv4(), bgColor:"bg-green-50", numberColor:"text-green-500" }
    ];

    const cardDataRow2 = [
        { title: "Pending", id: uuidv4(), bgColor:"bg-yellow-50", numberColor:"text-gray-800" },

        { title: "Wishlist", id: uuidv4(), bgColor:"bg-emerald-50", numberColor:"text-green-400" },

        { title: "Rejected", id: uuidv4(), bgColor:"bg-indigo-50", numberColor:"text-indigo-500" }
    ];

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <div className="flex flex-col gap-1">

                {/* Row-1 */}
                <div className="grid grid-cols-[3fr_2fr_1fr] grid-rows-1 gap-1">
                    {cardDataRow1.map((cardData) => {
                        return <JobStatus key={cardData.id} title={cardData.title} bgColor={cardData.bgColor} numberColor = {cardData.numberColor} getData={getData} />
                    })}
                </div>

                {/* Row-2     */}
                <div className="grid grid-cols-[1fr_2fr_2fr] grid-rows-1 gap-1">
                    {cardDataRow2.map((cardData) => {
                        return <JobStatus key={cardData.id} title={cardData.title} bgColor={cardData.bgColor} numberColor = {cardData.numberColor} getData={getData} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Overview