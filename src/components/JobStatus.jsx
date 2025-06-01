import React from 'react'

function JobStatus({title, getData}) {

    let cardTitle=title=="total"?"Total Job Entries":title;
    let total=0;
    const jobDataArray = getData();
    if(jobDataArray != null){
        if(title == "total"){
            total = jobDataArray.length;
        }
        else{
            for(let jobData of jobDataArray){
                if(jobData.jobStatus.toLowerCase() == title.toLowerCase()){
                    total+=1;
                }
            }
        }
    }

  return (
    <>
    <div className="inline-flex flex-col border border-black p-2 items-left justify-center text-lg rounded-xl">
        <span>{cardTitle}</span>
        <span>{total}</span>
    </div>
    </>
  )
}

export default JobStatus