'use client'
// import { JobType } from '@/types/jobs.types';
import React from 'react';
import Image from 'next/image';
import { Landmark, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Briefcase } from 'lucide-react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { jobSorting } from '@/lib/constant/jobs.constant';

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]
// import _ from 'lodash';
interface JobPostInterface {
  id: string;
  title: string;
  slug: string;
  companyImage: {
    url: string;
  };
  body: {
    html: string;
  };
  author: string;
  salary: string;
  createdAt: string;
  skill: string[];
  experience: {
    experience: string;
  };
  domain: {
    domain: string;
  };
  jobTypeReference: {
    jobType: string;
  };
  apply: string;
}

//@ts-ignore
function DateFormatter({ isoDate }) {
  const date = new Date(isoDate);


  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  return <span>{formattedDate}</span>;
}

//@ts-ignore
export default function JobCard({ job }: JobPostInterface) {
  const [goal, setGoal] = React.useState(350)
  console.log(job);
  console.log(job.body)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }
  return (
    <div>
      <Drawer >
        <DrawerTrigger asChild>
          <div className="border  transition-all duration-115 ease-linear hover:bg-lightBgSecondary dark:hover:bg-darkBgSecondary flex flex-col gap-6 h-fit max-h-[15rem] p-4 rounded-xl">
            <div className="flex gap-4 items-center">
              <div className="w-[4rem] h-[4rem]  rounded-xl">

                <Image
                  className="size-full object-contain"
                  src={job.companyImage.url}
                  width={'500'}
                  height={'500'}
                  alt="company-logo"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-lg">{job.title}</h2>
                <div className="text-xs flex gap-1 font-medium items-center text-gray-500">
                  <span>{job.jobTypeReference.jobType}</span>•
                  <span>Posted on  <DateFormatter isoDate={job.createdAt} />  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="px-4 py-1 w-fit text-blue-500 bg-blue-500/20 rounded-[5px] flex items-center justify-center text-xs font-bold">

                {job.domain.domain}
              </div>
              <div className="px-4 py-1 w-fit text-white bg-green-900/90 rounded-lg flex items-center justify-center text-xs gap-2 ">
                <Landmark size={14} />
                <p className="text-xs font-medium">
                  {job.salary}
                </p>
              </div>

              <div className="px-4 py-1 w-fit text-white bg-gray-900/90 rounded-lg flex items-center justify-center  gap-2">
                <Briefcase size={14} />
                <p className="text-xs font-medium">
                  {job.experience.experience} years
                </p>

              </div>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent className='h-2/3'>
          <ScrollArea className="h-full w-full rounded-md  p-4">
            <div className="mx-auto w-4/5  ">
              <DrawerHeader>
                <DrawerTitle className='font-bold text-2xl'>{job.title}</DrawerTitle>
                <DrawerDescription className='flex gap-2'><div className="px-4 py-1 w-fit text-blue-500 bg-blue-500/20 rounded-lg flex items-center justify-center text-xs font-bold">

                  {job.domain.domain}
                </div>
                  <div className="px-4 py-1 w-fit text-blue-500 bg-blue-500/20 rounded-lg flex items-center justify-center text-xs font-bold">

                    {job.jobTypeReference.jobType}
                  </div>
                  <div className="px-4 py-1 w-fit text-blue-500 bg-blue-500/20 rounded-lg flex items-center justify-center text-xs font-bold">

                    {job.salary}
                  </div>

                  <div className="px-4 py-1 w-fit text-blue-500 bg-blue-500/20 rounded-lg flex items-center justify-center text-xs font-bold">

                    {job.experience.experience} years
                  </div>
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">

                  <div
                    className=" max-w-none"
                    dangerouslySetInnerHTML={{ __html: job.body.html }}
                  />
                </div>
              </div>
              <DrawerFooter className='w-32'>
                <Button>Apply</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>

          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
