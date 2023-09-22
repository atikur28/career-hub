import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import "./Features.css";

const Feature = ({feature}) => {
    console.log(feature);
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = feature;
    return (
        <div className="py-6 px-6 w-10/12 mx-auto border-2 rounded-lg">
            <div className="mb-5">
                <img src={logo} alt="" />
            </div>
            <h3 className="my-2 text-xl font-bold text-[#474747]">{job_title}</h3>
            <p className="text-base text-[#757575]">{company_name}</p>
            <div className="mt-3 flex gap-3">
                <button className="btn border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                <button className="btn border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
            </div>
            <div className="flex gap-8 my-3">
                <div className="flex items-center gap-2">
                   <p className="text-2xl"><IoLocationOutline></IoLocationOutline></p>
                   <p className="text-base text-[#757575]">{location}</p>
                </div>
                <div className="flex items-center gap-2">
                   <p className="text-2xl"><AiOutlineDollarCircle></AiOutlineDollarCircle></p>
                   <p className="text-base text-[#757575]">Salary: {salary}</p>
                </div>
            </div>
            <div>
                <button className="py-3 px-4 rounded-md mt-2 color text-white font-bold">View Details</button>
            </div>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object
}

export default Feature;