import {useState} from 'react'
import JobsList from '../components/JobsList'
import SortDropdown from '../components/SortDropdown'

function AllJobs({getData}) {

  const [sortBy, setSortBy] = useState('latest');
  return (
    <div>
      <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      <JobsList jobEntries={
        sortBy=='oldest'? getData():getData().reverse()} />
    </div>
  )
}

export default AllJobs