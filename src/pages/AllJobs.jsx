import { useState } from 'react'
import JobsList from '../components/JobsList'
import SortDropdown from '../components/SortDropdown'
import FilterDropdown from '../components/FilterDropdown';

function AllJobs({ getData }) {

  const allJobData = getData();
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

  return (
    <div className="flex flex-col gap-2 pt-2">
      <div className="flex gap-6 pl-6">
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        <FilterDropdown filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>

      <JobsList jobEntries={sortArray(filterArray())} />
    </div>
  )
}

export default AllJobs