import React from 'react'

function DataCard({ getJobData, title }) {

    let jobData = getJobData();
    const jobDataArray = jobData.slice(0, 6);

    return (
        <div className="bg-neutral-50 border border-gray-100 shadow-sm rounded-xl w-1/2 px-4 py-2 flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{title}</h2>

            <div className="flex flex-col gap-2">
                {jobDataArray.length != 0 ?
        
                        jobDataArray.map((data) => {
                            return (
                                <div className="flex justify-between" key={data.id}>
                                    <li className="list-none">{data.position || data.companyName}</li>
                                    <span>{data.applications || ""}</span>
                                </div>
                            )
                        })
                     :
                    <p>Please Add Data to show stats</p>
                }
            </div>

        </div>
    )
}

export default DataCard