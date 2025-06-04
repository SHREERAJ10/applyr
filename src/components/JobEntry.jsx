import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import Backdrop from './Backdrop';

function JobEntry({ storageKey, setCardShown }) {

  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('Pending');
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

  function saveData(jobData) {
        if (localStorage.getItem(storageKey) == null) {
            localStorage.setItem(storageKey, JSON.stringify([]));
        }
        const currentEntries = JSON.parse(localStorage.getItem(storageKey));
        localStorage.setItem(
            storageKey,
            JSON.stringify([...currentEntries, jobData])
        );
        setCardShown(false);
    }


  return (
    <>
      <div className="w-full h-screen flex justify-center items-center absolute top-0">
        <Backdrop onClick = {()=>setCardShown(false)} />

        <form className="flex flex-col gap-2 max-w-[340px] bg-white p-3 rounded-xl shadow shadow-black z-20" onSubmit={()=>saveData(prepData())}>
          <h1 className="text-2xl text-slate-800 font-semibold">Add Job Entry</h1>
          <input type="text" name="company-name" placeholder="Company Name" className="border border-blue-200 p-2 rounded-xl" value={companyName} onChange={e => setCompanyName(e.target.value)} required />

          <input type="text" name="position" placeholder="Position" className="border border-blue-200 p-2 rounded-xl" value={position} onChange={e => setPosition(e.target.value)} required />

          <label htmlFor="jobStatus" className="font-semibold">Status</label>

          <select name="status" id="jobStatus" value={status} onChange={e =>setStatus(e.target.value)} className="border border-blue-200 p-2 rounded-xl cursor-pointer">
            <option value="Pending">Pending</option>
            <option value="Wishlist">Wishlist</option>
            <option value="Interview">Interview</option>
            <option value="Offered">Offered</option>
            <option value="Rejected">Rejected</option>
          </select>

          <label className="font-semibold">Date:</label>
          <Calendar value={dateApplied} onChange={setDateApplied} />

          <div className="flex justify-between">
            <div className="border border-slate-200 w-20 rounded-xl flex justify-center" >
              <Button onClick = {()=>setCardShown(false)} text="Cancel" />
            </div>
            <div className="bg-blue-500 text-white w-20 flex items-center justify-center rounded-xl">
              <Button type="submit" text="Save" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default JobEntry