import { useState } from "react";
import JobEntry from "./components/JobEntry";
import {v4 as uuidv4} from 'uuid';
import Overview from "./components/Overview";
import Button from "./components/Button";
import Header from "./components/Header";
import DataCard from "./components/DataCard";

function App() {
  const storageKey = "jobEntries";
  const [cardShown, setCardShown] = useState(false);

  function showJobCard() {
    cardShown == true ? setCardShown(false) : setCardShown(true);
  }

  function getData() {
    return JSON.parse(localStorage.getItem(storageKey));
  }

  function getApplicationsPerPosition() {
    const jobDataArray = getData();
    let applicationsPerPosition = {};
    for (let jobData of jobDataArray) {
      let position = jobData.jobPosition;
      if (position.trim().toLowerCase() in applicationsPerPosition) {
        applicationsPerPosition[position] += 1;
      } else {
        applicationsPerPosition[position] = 1;
      }
    }
    return applicationsPerPosition;
  }

  function applicationsPerPositionToArray(applicationsPerPosition) {
    let jobPositionsArr = [];
    for (let key in applicationsPerPosition) {
        jobPositionsArr.push({
        position: key,
        applications: applicationsPerPosition[key],
        id:uuidv4()
      });
    }
    return jobPositionsArr;
  }

  function getPendingApplications() {
    let jobDataArray = getData();
    let pendingApplications = [];
    for (let jobData of jobDataArray) {
      if (jobData.jobStatus.toLowerCase() == "pending") {
        pendingApplications.push(jobData);
      }
    }
    return pendingApplications;
  }

  return (
    <>
      <Header />

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

      <div className="w-full absolute bottom-4 flex justify-end pr-4 -z-10">
        <div className="bg-blue-500 w-16 h-16 rounded-full text-white text-4xl flex justify-center items-center">
          <Button onClick={showJobCard} text="+" />
        </div>
      </div>

      {cardShown == true ? (
        <JobEntry storageKey={storageKey} setCardShown={setCardShown} />
      ) : null}
    </>
  );
}

export default App;
