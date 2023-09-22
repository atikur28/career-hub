import { useEffect, useState } from "react";
import Job from "./Job";

const CategoryList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('categories.json')
          .then( res => res.json() )
          .then( data => setJobs(data) )
    } ,[] )

    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-center mb-5">Job Category List</h2>
            <p className="text-base text-[#757575] text-center mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex items-center justify-evenly">
                {
                    jobs.map( job => <Job key={job.id} job={job} ></Job> )
                }
            </div>
        </div>
    );
};

export default CategoryList;