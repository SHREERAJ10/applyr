import {useState} from 'react'
import JobCard from './components/JobCard'
import JobStatus from './components/JobStatus';

import Overview from './components/Overview';
import AddBtn from './components/AddBtn';

function App() {

  const storageKey = "jobEntries";
  const [cardShown, setCardShown] = useState(false);

  function showJobCard(){
      cardShown==true?setCardShown(false):setCardShown(true);
  }

  function getData(){
    return JSON.parse(localStorage.getItem(storageKey));
  }

  return (
    <>
    <div className="w-full flex justify-center">
      <AddBtn showJobCard={showJobCard}/>
    </div>
    {cardShown==true?
      <JobCard storageKey={storageKey} setCardShown={setCardShown} />:
      null}
    
    <header className="w-full bg-gray-200 h-14">
      <nav className="h-full flex items-center">
        <h1 className="text-2xl">Dashboard</h1>
      </nav>
    </header>
    <Overview getData={getData} />



    </>
  )
}

export default App
