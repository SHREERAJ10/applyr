import React from 'react'
import Button from './Button';
import { X, Calendar, Trash2, Pencil } from 'lucide-react';
import StatusTag from './StatusTag';

function JobCard({ cardData, toggleJobCard, deleteOrNot, setIsEditBtnPressed }) {
  return (
    <>
      <div className="p-4">
        <div className="shadow shadow-black w-96 bg-white p-4 rounded-3xl flex flex-col gap-4 z-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-bold text-2xl">{cardData.companyName}</h1>
              <h2 className="font-semibold text-lg">{cardData.jobPosition}</h2>
            </div>
            <Button onClick={toggleJobCard} text={<X color="#9CA3AF" />} />
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2">
              <Calendar color="#374151" strokeWidth={1.5} />
              <div className="flex flex-col text-gray-700">
                <span>Scheduled For</span>
                <span>{cardData.date}</span>
              </div>
            </div>
            <div>
              <StatusTag status={cardData.jobStatus} />
            </div>
          </div>

          <div className="flex justify-between">
            <Button text={<Pencil color="	#3B82F6" strokeWidth={1.5} onClick={() => {
              toggleJobCard()
              setIsEditBtnPressed(true)

            }} />} />
            <Button text={<Trash2 color="#EF4444" strokeWidth={1.5} onClick={deleteOrNot} />} />


          </div>
        </div>
      </div>
    </>
  )
}

export default JobCard