import React from 'react'

function JobStatus({title, bgColor, numberColor, getData}) {

    let cardTitle=title=="total"?"Total Job Entries":title;
    let total=0;

    const jobDataArray = getData();

    if(jobDataArray.length != 0){
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
    <div className={`inline-flex flex-col ${bgColor} p-2 items-left justify-center text-base rounded-xl`}>
        <span className="text-gray-700 font-semibold">{cardTitle}</span>
        <span className={`${numberColor} font-bold`}>{total}</span>
    </div>
    </>
  )
}

export default JobStatus