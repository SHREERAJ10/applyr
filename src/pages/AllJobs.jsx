import { useState } from 'react'
import JobsList from '../components/JobsList'
import SortDropdown from '../components/SortDropdown'
import FilterDropdown from '../components/FilterDropdown';
import JobCard from '../components/JobCard';
import ConfirmationPopup from '../components/ConfirmationPopup';
import JobEntryFrom from '../components/JobEntryForm';
import Backdrop from '../components/Backdrop';
import Button from '../components/Button';

function AllJobs({ getData, storageKey }) {

  const [allJobData, setAllJobData] = useState(getData());
  const [jobCardData, setJobCardData] = useState('');
  const [showJobCard, setShowJobCard] = useState(false);
  const [sortBy, setSortBy] = useState('latest');
  const [filterBy, setFilterBy] = useState('all');
  const [deleteBtnPressed, setDeleteBtnPressed] = useState(false);
  const [isEditBtnPressed, setIsEditBtnPressed] = useState(false);

  function filterArray() {
    let filteredArray = filterBy == 'all' ? allJobData :
      allJobData.filter((jobData) => {
        return jobData.jobStatus.toLowerCase() == filterBy
      })
    return filteredArray;
  }

  function sortArray(filteredArray) {
    return sortBy == 'oldest' ? filteredArray : [...filteredArray].reverse();
  }

  function toggleJobCard() {
    showJobCard == true ? setShowJobCard(false) : setShowJobCard(true);
    document.body.classList.toggle("overflow-hidden");
  }

  function proceedToDelete() {
    deleteBtnPressed == true ? setDeleteBtnPressed(false) : setDeleteBtnPressed(true);
    document.body.classList.toggle("overflow-hidden");
    toggleJobCard();
  }

  function deleteJobEntry(jobId) {
    let newJobDataArray = allJobData.filter((jobEntry) => {
      if (jobEntry.id != jobId) {
        return jobEntry;
      }
    });
    localStorage.setItem(storageKey, JSON.stringify(newJobDataArray));
    setAllJobData(newJobDataArray)
    setDeleteBtnPressed(false);
  }

  function clearAllEntries(){
    localStorage.removeItem(storageKey);
    setAllJobData([]);
  }

  return (
    <div className="flex flex-col gap-2 pt-2">
      <div className="flex justify-between px-4">
        <div className="flex gap-6">
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          <FilterDropdown filterBy={filterBy} setFilterBy={setFilterBy} />
        </div>
        <div className="bg-gray-100 border border-gray-100 rounded-xl text-gray-900">
          <Button text = "Clear All" onClick={clearAllEntries} />
        </div>
      </div>

      <JobsList jobEntries={sortArray(filterArray())} setJobCardData={setJobCardData} toggleJobCard={toggleJobCard} />

      {showJobCard == true ?
        <div className="">
          <Backdrop onClick={toggleJobCard} />
          <div className="fixed top-[50%] left-[50%] -translate-[50%] z-20">

            <JobCard cardData={jobCardData} toggleJobCard={toggleJobCard} deleteOrNot={proceedToDelete} setIsEditBtnPressed={setIsEditBtnPressed} />
          </div>
        </div> : null}

      {deleteBtnPressed == true ?
        <div>
          <Backdrop onClick={() => proceedToDelete()} />
          <div className="fixed top-[50%] left-[50%] -translate-[50%] z-20">
            <ConfirmationPopup text="Are you sure you want to delete this?" deleteOrNot={proceedToDelete} deleteJobEntry={deleteJobEntry} curJobId={jobCardData.id} />
          </div>
        </div>
        :
        null
      }

      {isEditBtnPressed == true ?
        <div>
          <Backdrop onClick={() => setIsEditBtnPressed(false)} />
          <div className="fixed top-[50%] left-[50%] -translate-[50%] z-20">
            <JobEntryFrom setCardShown={setIsEditBtnPressed} prefillJobData={jobCardData} storageKey="jobEntries" setAllJobData={setAllJobData} />
          </div>
        </div>
        :
        null
      }

    </div>
  )
}

export default AllJobs