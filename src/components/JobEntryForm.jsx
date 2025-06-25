import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

function JobEntryForm({ storageKey, setCardShown, prefillJobData, setAllJobData }) {

  const [companyName, setCompanyName] = useState(prefillJobData == undefined ? '' : prefillJobData.companyName);
  const [position, setPosition] = useState(prefillJobData == undefined ? '' : prefillJobData.jobPosition);
  const [status, setStatus] = useState(prefillJobData == undefined ? 'Pending' : prefillJobData.jobStatus);
  const [dateApplied, setDateApplied] = useState(prefillJobData == undefined ? new Date() : prefillJobData.date);

  function prepData() {
    const jobData = {
      companyName: companyName,
      jobPosition: position,
      jobStatus: status,
      date: typeof (dateApplied) == "string" ? dateApplied : dateApplied.toDateString(),
      id: prefillJobData == undefined ? uuidv4() : prefillJobData.id
    }
    return jobData;
  }

  function editJobEntry(entryToBeReplaced, editedJobEntry, jobDataArray) {
    const index = jobDataArray.indexOf(entryToBeReplaced);
    if (index != -1) {
      jobDataArray.splice(index, 1, editedJobEntry);
    }
    return jobDataArray;
  }

  function saveData(jobData) {
    if (localStorage.getItem(storageKey) == null) {
      localStorage.setItem(storageKey, JSON.stringify([]));
    }

    const currentEntries = JSON.parse(localStorage.getItem(storageKey));
    let newJobEntries = [...currentEntries, jobData];

    for (let jobEntry of currentEntries) {

      //Edit Data
      if (jobEntry.id == jobData.id) {
        const editedJobEntries = editJobEntry(jobEntry, jobData, [...currentEntries])
        newJobEntries = editedJobEntries
        setAllJobData(newJobEntries)
      }
    }

    //Save Data
    localStorage.setItem(
      storageKey,
      JSON.stringify(newJobEntries)
    );
  }


  return (
    <>
        <form className="flex flex-col gap-2 max-w-[340px] bg-white p-3 rounded-xl shadow shadow-black" onSubmit={() => {
          saveData(prepData())
          setCardShown(false);
        }
        }>
          <h1 className="text-2xl text-slate-800 font-semibold">Add Job Entry</h1>
          <input type="text" name="company-name" placeholder="Company Name" className="border border-blue-200 p-2 rounded-xl" value={companyName} onChange={e => setCompanyName(e.target.value)} required />

          <input type="text" name="position" placeholder="Position" className="border border-blue-200 p-2 rounded-xl" value={position} onChange={e => setPosition(e.target.value)} required />

          <label htmlFor="jobStatus" className="font-semibold">Status</label>

          <select name="status" id="jobStatus" value={status} onChange={e => setStatus(e.target.value)} className="border border-blue-200 p-2 rounded-xl cursor-pointer">
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
              <Button onClick={() => setCardShown(false)} text="Cancel" />
            </div>
            <div className="bg-blue-500 text-white w-20 flex items-center justify-center rounded-xl">
              <Button type="submit" text="Save" />
            </div>
          </div>
        </form>
    </>
  )
}

export default JobEntryForm