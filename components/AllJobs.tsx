import React from 'react'
import JobCard from './jobCard'

function AllJobs() {
  return (
    <div className='flex flex-col gap-2'>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
    </div>
  )
}

export default AllJobs