import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../FeaturedJobs/StoredJobs/local-storage";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect( () => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobApplied);
        }
    }, [] )
    return (
        <div className="my-32">
            <h1 className="text-3xl font-bold text-center my-10">Applied Jobs</h1>
            <div className="container mx-auto my-20">
                {
                    appliedJobs.map( job => <AppliedJob key={job.id} job={job} ></AppliedJob> )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;