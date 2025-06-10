import { useState, useContext } from "react";
import JobEntryForm from "../components/JobEntryForm";
import {v4 as uuidv4} from 'uuid';
import Overview from "../components/Overview";
import Button from "../components/Button";
import Header from "../components/Header";
import DataCard from "../components/DataCard";
import JobsList from "../components/JobsList";

function Dashboard({getData}) {

  const storageKey = "jobEntries";
  const [cardShown, setCardShown] = useState(false);

  function showJobCard() {
    cardShown == true ? setCardShown(false) : setCardShown(true);
  }

  function getApplicationsPerPosition() {
    const jobDataArray = getData();
    let applicationsPerPosition = {};

    if(jobDataArray.length!=0){
      for (let jobData of jobDataArray) {
        let position = jobData.jobPosition;
        if (position.trim().toLowerCase() in applicationsPerPosition) {
          applicationsPerPosition[position] += 1;
        } else {
          applicationsPerPosition[position] = 1;
        }
      }
      return applicationsPerPosition; //returns object
    }
    else{
      return null;
    }
  }

  function applicationsPerPositionToArray(applicationsPerPosition) {
    let jobPositionsArr = [];

    if(applicationsPerPosition != null){
      for (let key in applicationsPerPosition) {
          jobPositionsArr.push({
          position: key,
          applications: applicationsPerPosition[key],
          id:uuidv4()
        });
      }
    }
    return jobPositionsArr; //returns array: empty or with elements
  }

  function getPendingApplications() {
    let jobDataArray = getData();
    let pendingApplications = [];

    if(jobDataArray.length!=0){
      for (let jobData of jobDataArray) {
        if (jobData.jobStatus.toLowerCase() == "pending") {
          pendingApplications.push(jobData);
        }
      }
    }
    return pendingApplications; //returns array: empty or with elements
    
  }

  return (
    <>
    <Overview getData={getData} />

      <div className="flex px-2 gap-2">
        <DataCard
          title="Jobs By Category"
          getJobData={() =>{
            return applicationsPerPositionToArray(getApplicationsPerPosition())
          }
          }
        />
        <DataCard title="Waiting to Hear From" getJobData={getPendingApplications} />
      </div>
      
      <div className="mt-4">
        <h2 className="font-bold text-xl pl-8">Recent Activity</h2>

        {/* Passes only last 3 elements from the array */}
        <JobsList jobEntries={(()=>getData().slice(-3).reverse())()} />
      </div>

      <div className="w-full sticky bottom-4 flex justify-end pr-4 z-0">
        <div className="bg-blue-500 w-16 h-16 rounded-full text-white text-4xl flex justify-center items-center">
          <Button onClick={showJobCard} text="+" />
        </div>
      </div>

      {cardShown == true ? (
        <JobEntryForm storageKey={storageKey} setCardShown={setCardShown} />
      ) : null}
    </>
  )
}

export default Dashboard