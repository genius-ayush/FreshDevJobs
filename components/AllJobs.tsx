'use client'
import React, { useEffect, useState } from 'react'
import JobCard from './jobCard'
import axios from "axios";

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

interface ApiResponse {
  data: {
    jobPosts: JobPostInterface[];
  };
  extensions: {
    "Complexity-Cost-Left": number;
    "Effective-Complexity-Limit": number;
  };
}

function AllJobs() {

  const [jobs, setJobs] = useState<JobPostInterface[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {

    const fetchJobs = async () => {
      try {
        const response = await axios.post<ApiResponse>(
          "https://ap-south-1.cdn.hygraph.com/content/clyfggcvi02yv07uxmtl5gva8/master",
          {
            query: `
              query JobPosts {
                jobPosts(orderBy: createdAt_DESC, first: 1000) {
                  id
                  title
                  slug
                  companyImage {
                    url
                  }
                  body {
                    html
                  }
                  author
                  salary
                  createdAt
                  skill {
                    skills
                  }
                  experience {
                    experience
                  }
                  domain {
                    domain
                  }
                  jobTypeReference {
                    jobType
                  }
                  apply
                }
              }
            `,
            operationName: "JobPosts",
          }
        );
        const jobs = response.data.data.jobPosts;
        // console.log(jobs) ; 
        setJobs(jobs);
        // setLoading(false);
      } catch (err) {
        setErr("Failed to load Jobs");
        console.error("Error fetching Jobs:", err);
      }
    }

    fetchJobs() ; 
  }, [])
  return (
    <div className='flex flex-col gap-2'>
      
      {jobs.map((job)=>(
        <JobCard props={jobs}/>
      ))}
    </div>
  )
}

export default AllJobs