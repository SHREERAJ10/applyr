import { useState } from 'react'
import JobsList from '../components/JobsList'
import SortDropdown from '../components/SortDropdown'
import FilterDropdown from '../components/FilterDropdown';
import JobCard from '../components/JobCard';

function AllJobs({ getData }) {

  const allJobData = getData();
  const [jobCardData, setJobCardData] = useState('');
  const [showJobCard, setShowJobCard] = useState(false);
  const [sortBy, setSortBy] = useState('latest');
  const [filterBy, setFilterBy] = useState('all');

  function filterArray() {
    let filteredArray = filterBy == 'all' ? allJobData : 
    allJobData.filter((jobData) => {
      if (jobData.jobStatus.toLowerCase() == filterBy) {
        return jobData;
      }
    })
    return filteredArray;
  }

  function sortArray(filteredArray) {
    return sortBy=='oldest'?filteredArray:filteredArray.reverse();
  }

  function toggleJobCard(){
    showJobCard==true?setShowJobCard(false):setShowJobCard(true);
    document.body.classList.toggle("overflow-hidden")
  }


  return (
    <div className="flex flex-col gap-2 pt-2">
      <div className="flex gap-6 pl-6">
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        <FilterDropdown filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>

      <JobsList jobEntries={sortArray(filterArray())} setJobCardData = {setJobCardData} toggleJobCard={toggleJobCard} />

      {showJobCard==true?<JobCard cardData={jobCardData} toggleJobCard={toggleJobCard} />:null}

      

    </div>
  )
}

export default AllJobs