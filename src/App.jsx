import {useState} from 'react'
import JobCard from './components/JobCard'

function App() {
  
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

  return (
    <>
    <div className="w-full flex justify-center">
      <button className="p-4 border border-black bg-blue-400 text-3xl text-white rounded-2xl cursor-pointer" onClick={showJobCard}>Add</button>
    </div>
    {cardShown==true?<JobCard jobInfo={jobInfo}/>:null}
    </>
  )
}

export default App
