import {useState} from 'react'
import JobCard from './components/JobCard'
import JobStatus from './components/JobStatus';

import Overview from './components/Overview';
import Button from './components/Button';

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
    <div className="w-full absolute bottom-4 flex justify-end pr-4">
      <div className="bg-blue-500 w-16 h-16 rounded-full text-white text-4xl flex justify-center items-center">
        <Button onClick={showJobCard} text="+" />
      </div>
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
