import { useEffect, useState } from "react";
import Feature from "./Feature";
import "./Features.css";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
    const [features, setFeatures] = useState([]);
    const [dataLength , setDataLength] = useState(4);

    useEffect( () => {
        fetch('jobs.json')
          .then( res => res.json() )
          .then( data => setFeatures(data) )
    }, [] )

    return (
        <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-5">Featured Jobs</h2>
            <p className="text-base text-[#757575] text-center mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="container mx-auto grid grid-cols-2 gap-6">
                {
                    features.slice(0, dataLength).map( feature => <Feature key={feature.id} feature={feature} ></Feature> )
                }
            </div>
            <div className={ dataLength === features.length && 'hidden'}>
                <div className="flex justify-center">
                   <Link><button onClick={() => setDataLength(features.length)} className="py-3 px-4 rounded-md mt-8 color text-white font-bold">See All Jobs</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;