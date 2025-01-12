import AllJobs from '@/components/AllJobs'
import JobsHeader from '@/components/JobHeader'
import React from 'react'

function page() {
    return (
        <div className="container relative grid sm:gap-6 gap-4 mt-28  lg:w-3/5 p-2 mx-auto mb-12">
            <div className="grid gap-2">
                <h1 className="text-3xl sm:text-4xl font-bold">Explore Jobs</h1>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Explore thousands of remote and onsite jobs that match your skills and
                    aspirations.
                </p>
            </div>

            <div className="flex gap-6">
                <div className="hidden w-[310px] rounded-lg sm:block border h-[calc(100vh-100px)] overflow-y-auto scrollbar-custom sticky top-[5.5rem]">
                    <div className=" ">
                        JobFilters
                    </div>
                </div>

                <div className="grow flex flex-col ">
                    <div className="sticky top-[4.5rem]  z-10 py-4">
                        <JobsHeader/>
                    </div>

                    <div className="grow ">
                        <AllJobs/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page