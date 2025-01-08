'use client'
// import { JobType } from '@/types/jobs.types';
import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
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


export default function JobCard() {
  const [goal, setGoal] = React.useState(350)
 
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }
  return (
    <div>
    {/* <Link href={`/jobs/1`}> */}
      <Drawer>
      <DrawerTrigger asChild>
      <div className="border  transition-all duration-115 ease-linear hover:bg-lightBgSecondary dark:hover:bg-darkBgSecondary flex flex-col gap-6 h-fit max-h-[10rem] p-4 rounded-xl">
        <div className="flex gap-4 items-center">
          <div className="w-[4rem] h-[4rem]  rounded-md">
            
              <Image
                className="size-full object-contain"
                src={"/logo"}
                width={'500'}
                height={'500'}
                alt="company-logo"
              />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Software Developer Inern</h2>
            <div className="text-xs flex gap-1 font-medium items-center text-gray-500">
              <span>Google</span>•
              <span>Posted on - 7 Jan 2025</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-1 w-fit text-blue-500 bg-blue-500/20 rounded-lg flex items-center justify-center text-xs font-bold">
            
            UI/UX designer 
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <p className="text-xs font-semibold">
                delhi - remote
            </p>
          </div>
        </div>
      </div>
      </DrawerTrigger>
      <DrawerContent className=''>
        <div className="mx-auto w-full max-w-sm ">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              hey 
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
      </Drawer>
    {/* </Link> */}
    </div>
  );
}
