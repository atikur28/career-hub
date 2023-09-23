import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Location from "../../assets/icons/location2.png";
import Dollar from "../../assets/icons/money.png";

const AppliedJob = ({job}) => {
    console.log(job);
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div className="flex items-center justify-between w-[1200px] mx-auto border p-10 rounded-lg my-5">
            <div className="flex gap-5 items-center">
                <div className="w-72 flex justify-center py-16 bg-gray-100 rounded-md">
                    <img className="w-40" src={logo} alt="logo" />
                </div>
                <div>
                    <h3 className="text-xl font-bold">{job_title}</h3>
                    <h3 className="text-[#757575] my-2 font-bold">{company_name}</h3>
                    <div className="flex gap-4">
                        <button className="btn border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="flex items-center gap-8 mt-4">
                        <div className="flex items-center gap-2">
                            <img src={Location} alt="" />
                            <h2>{location}</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Dollar} alt="" />
                            <h2>Salary : {salary}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link><button className="py-2 px-3 rounded-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white ">View Details</button></Link>
            </div>
        </div>
    );
};

AppliedJob.propTypes ={
    job: PropTypes.object
}

export default AppliedJob;