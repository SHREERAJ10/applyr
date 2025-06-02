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
      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-col gap-2 bg-gray-100 w-80 h-[500px] rounded-30xl">
          <input type="text" name="company-name" placeholder="Company Name" className="outline outline-black" value={companyName} onChange={e => setCompanyName(e.target.value)} />

          <input type="text" name="position" placeholder="position" className="outline outline-black" value={position} onChange={e => setPosition(e.target.value)} />

          <label htmlFor="status">Status</label>

          <select name="status" id="status" value={status} onChange={e => setStatus(e.target.value)}>
            <option value="None">None</option>
            <option value="Pending">Pending</option>
            <option value="Wishlist">Wishlist</option>
            <option value="Interview">Interview</option>
            <option value="Offered">Offered</option>
            <option value="Rejected">Rejected</option>
          </select>

          <label htmlFor="calendar">Date Applied:</label>
          <Calendar id="calendar" value={dateApplied} onChange={setDateApplied} />

          <div className="flex justify-around">
            <div className="border border-gray-300 w-20 rounded-xl">
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