import { useState } from 'react'
import JobsList from '../components/JobsList'
import SortDropdown from '../components/SortDropdown'
import FilterDropdown from '../components/FilterDropdown';
import JobCard from '../components/JobCard';
import ConfirmationPopup from '../components/ConfirmationPopup';

function AllJobs({ getData, storageKey }) {

  const [allJobData,setAllJobData] = useState(getData());
  const [jobCardData, setJobCardData] = useState('');
  const [showJobCard, setShowJobCard] = useState(false);
  const [sortBy, setSortBy] = useState('latest');
  const [filterBy, setFilterBy] = useState('all');
  const [deleteBtnPressed, setDeleteBtnPressed] = useState(false);

  function filterArray() {
    let filteredArray = filterBy == 'all' ? allJobData : 
    allJobData.filter((jobData) => {
      return jobData.jobStatus.toLowerCase() == filterBy
    })
    return filteredArray;
  }

  function sortArray(filteredArray) {
    return sortBy=='oldest'?filteredArray:[...filteredArray].reverse();
  }



  function toggleJobCard(){
    showJobCard==true?setShowJobCard(false):setShowJobCard(true);
    document.body.classList.toggle("overflow-hidden");
  }

  function proceedToDelete(){
    deleteBtnPressed==true?setDeleteBtnPressed(false):setDeleteBtnPressed(true);
    document.body.classList.toggle("overflow-hidden");
    toggleJobCard();
  }

  function deleteJobEntry(jobId){
    let newJobDataArray = allJobData.filter((jobEntry)=>{
      if(jobEntry.id!=jobId){
        return jobEntry;
      }
    });
    localStorage.setItem(storageKey, JSON.stringify(newJobDataArray));
    setAllJobData(newJobDataArray)
    setDeleteBtnPressed(false);
  }

  return (
    <div className="flex flex-col gap-2 pt-2">
      <div className="flex gap-6 pl-6">
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        <FilterDropdown filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>

      <JobsList jobEntries={sortArray(filterArray())} setJobCardData = {setJobCardData} toggleJobCard={toggleJobCard} />

      {showJobCard==true?<JobCard cardData={jobCardData} toggleJobCard={toggleJobCard} deleteOrNot={proceedToDelete} />:null}

      {deleteBtnPressed==true?
        <ConfirmationPopup text="Are you sure you want to delete this?" deleteOrNot={proceedToDelete} deleteJobEntry={deleteJobEntry} curJobId = {jobCardData.id} />:
        null  
    }

    </div>
  )
}

export default AllJobs