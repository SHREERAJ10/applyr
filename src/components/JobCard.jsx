import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function JobCard({jobInfo, prepData, saveData}) {
    const {companyName, setCompanyName,
    position, setPosition,
    status, setStatus,
    dateApplied, setDateApplied} = jobInfo;

  return (
    <>
    <div className="w-full flex justify-center mt-8">
        <div className="flex flex-col gap-2 bg-gray-100 w-80 h-[500px] rounded-30xl">
            <input type="text" name="company-name" placeholder="Company Name" className="outline outline-black" value={companyName} onChange={e=>setCompanyName(e.target.value)}/>

            <input type="text" name="position" placeholder="position" className="outline outline-black" value={position} onChange={e=>setPosition(e.target.value)}/>

            <label htmlFor="status">Status</label>

            <select name="status" id="status" value={status} onChange={e=>setStatus(e.target.value)}>
                <option value="None">None</option>
                <option value="pending">Pending</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
            </select>

            <label htmlFor="calendar">Date Applied:</label>
            <Calendar id="calendar" value={dateApplied} onChange={setDateApplied} />

            <button className="border border-black bg-blue-400 text-lg text-white rounded-2xl cursor-pointer" onClick = {()=>{
                saveData(prepData());
            }}>Save</button>
        </div>
    </div>
    </>
  )
}

export default JobCard