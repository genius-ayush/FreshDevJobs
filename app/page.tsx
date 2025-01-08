import Faqs from "@/components/faqs";
import Header from "@/components/Header";
import HeroSection from "@/components/heroSection";
import JobCard from "@/components/jobCard";
import Image from "next/image";
// import {
//   JobQuerySchema,
//   JobQuerySchemaType,
// } from '@/lib/validators/jobs.validator';

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Faqs/>

      {/* <AllJobs searchParams={parsedSearchParams} /> */}
      
    </div>
  );
}
