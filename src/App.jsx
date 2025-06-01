import {useState} from 'react'
import JobCard from './components/JobCard'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const storageKey = "jobEntries";
  
  const [cardShown, setCardShown] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [dateApplied, setDateApplied] = useState(new Date());
  const jobInfo = {
    companyName, setCompanyName,
    position, setPosition,
    status, setStatus,
    dateApplied, setDateApplied
  }

  function showJobCard(){
      cardShown==true?setCardShown(false):setCardShown(true);
  }

  function prepData(){
      const jobData = {
        companyName:companyName,
        jobPosition:position,
        jobStatus:status,
        date:dateApplied.toDateString(),
        id: uuidv4()
      }
      return jobData;
  }

  function saveData(jobData){
      if(localStorage.getItem(storageKey) == null){
        localStorage.setItem(storageKey,JSON.stringify([]));
      }
      const currentEntries = JSON.parse(localStorage.getItem(storageKey));
      localStorage.setItem(storageKey,JSON.stringify([...currentEntries,jobData]));
  }

  return (
    <>
    <div className="w-full flex justify-center">
      <button className="p-4 border border-black bg-blue-400 text-3xl text-white rounded-2xl cursor-pointer" onClick={showJobCard}>Add</button>
    </div>
    {cardShown==true?<JobCard jobInfo={jobInfo} prepData={prepData} saveData={saveData}/>:null}



    </>
  )
}

export default App
