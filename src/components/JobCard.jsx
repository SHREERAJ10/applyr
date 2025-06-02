import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { v4 as uuidv4 } from 'uuid';
import SaveBtn from './SaveBtn';
import CancelBtn from './CancelBtn';

function JobCard({ storageKey, setCardShown }) {

  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [dateApplied, setDateApplied] = useState(new Date());

  function prepData() {
    const jobData = {
      companyName: companyName,
      jobPosition: position,
      jobStatus: status,
      date: dateApplied.toDateString(),
      id: uuidv4()
    }
    return jobData;
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center absolute">
        <div className="absolute border border-black w-full h-full bg-black opacity-25">
          djalsdfjl;
        </div>

        <div className="flex flex-col gap-2 max-w-[340px] bg-white p-3 rounded-xl shadow shadow-black z-20">
          <h1 className="text-2xl text-slate-800 font-semibold">Add Job Entry</h1>
          <input type="text" name="company-name" placeholder="Company Name" className="border border-blue-200 p-2 rounded-xl" value={companyName} onChange={e => setCompanyName(e.target.value)} />

          <input type="text" name="position" placeholder="Position" className="border border-blue-200 p-2 rounded-xl" value={position} onChange={e => setPosition(e.target.value)} />

          <label htmlFor="status" className="font-semibold">Status</label>

          <select name="status" id="status" value={status} onChange={e => setStatus(e.target.value)} className="border border-blue-200 p-2 rounded-xl cursor-pointer">
            <option value="None">None</option>
            <option value="Pending">Pending</option>
            <option value="Wishlist">Wishlist</option>
            <option value="Interview">Interview</option>
            <option value="Offered">Offered</option>
            <option value="Rejected">Rejected</option>
          </select>

          <label htmlFor="calendar" className="font-semibold">Date:</label>
          <Calendar id="calendar" value={dateApplied} onChange={setDateApplied} />

          <div className="flex justify-between">
            <div className="border border-slate-200 w-20 rounded-xl">
              <CancelBtn setCardShown={setCardShown} />
            </div>
            <div className="bg-blue-500 text-white w-20 flex items-center justify-center rounded-xl">
              <SaveBtn storageKey={storageKey} prepData={prepData} setCardShown={setCardShown} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobCard