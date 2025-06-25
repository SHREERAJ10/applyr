import React from 'react'
import JobEntry from './JobEntry'

function JobsList({jobEntries, setJobCardData, toggleJobCard}) {

  return (
      <div className="flex flex-col items-center">
        {jobEntries.map((jobEntry)=>{
          return <JobEntry key={jobEntry.id} title={jobEntry.companyName} subtitle = {jobEntry.jobPosition} status={jobEntry.jobStatus} onClick = {()=>{
            setJobCardData(jobEntry);
            toggleJobCard();
          }} />
        })}
    </div>
  )
}

export default JobsList