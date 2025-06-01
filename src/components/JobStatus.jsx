import React from 'react'

function JobStatus({title, getData}) {

    let cardTitle="";
    let total=0;
    const jobDataArray = getData();
    if(jobDataArray != null){
        if(title == "total"){
            cardTitle = "Total Job Entries";
            total = jobDataArray.length;
        }
        else{
            cardTitle = title;
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