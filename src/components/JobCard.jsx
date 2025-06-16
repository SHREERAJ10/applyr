import React from 'react'
import { X, Calendar, Trash2, Pencil  } from 'lucide-react';

function JobCard() {
  return (
    <div className="fixed top-56 w-full flex justify-center">
        <div className="shadow shadow-black w-96 bg-white p-4 rounded-3xl flex flex-col gap-4">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-2xl">Dropbox</h1>
              <h2 className="font-semibold text-lg">Product Manager</h2>
            </div>
            <div>
              <X color="#9CA3AF" />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2">
              <Calendar color="#374151" strokeWidth={1.5} />
              <div className="flex flex-col text-gray-700">
                <span>Applied on</span>
                <span>June 6, 2024</span>
              </div>
            </div>
            <div>
              <span>Interview</span>
            </div>
          </div>

          <div className="flex justify-between">
            <Pencil color="	#3B82F6" strokeWidth={1.5} />
            <Trash2 color="#EF4444" strokeWidth={1.5} />
          </div>
        </div>
    </div>
  )
}

export default JobCard