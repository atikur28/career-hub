import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendar from "../../assets/icons/calendar.png";
import Email from "../../assets/icons/email.png";
import Location from "../../assets/icons/location2.png";
import Dollar from "../../assets/icons/money.png";
import Phone from "../../assets/icons/phone.png";
import { saveAppliedJobs } from "./StoredJobs/local-storage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find( job => job.id === idInt );
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;
    const notify = () => {
        saveAppliedJobs(idInt);
        toast("You have applied for this Job !");
    };
    return (
        <div className="container my-20 mx-auto">
            <h2 className="text-2xl font-bold text-center">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4 mt-9">
                <div className="md:col-span-3">
                    <p className="text-[#757575] text-justify"><span className="text-[black] font-bold">Job Description:</span> {job_description}</p>
                    <p className="text-[#757575] text-justify my-3"><span className="text-[black] font-bold">Job Responsibility:</span> {job_responsibility}</p>
                    <p className="text-[#757575] mb-3"><span className="text-[black] font-bold">Educational Requirements:</span> {educational_requirements}</p>
                    <p className="text-[#757575]"><span className="text-[black] font-bold">Experiences:</span> {experiences}</p>
                </div>
                <div>
                    <div className="bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-6 rounded-lg py-10">
                    <h5 className="text-xl font-bold border-b pb-4">Job Details</h5>
                    <div className="my-3 flex items-center gap-2">
                        <img className="w-fit" src={Dollar} alt="" />
                        <p className="text-[#757575]"><span className="text-black font-bold">Salary :</span> {salary} (Per Month)</p>
                    </div>
                    <div className="flex items-center gap-2 border-b pb-4">
                        <img className="w-fit" src={Calendar} alt="" />
                        <p className="text-[#757575]"><span className="text-black font-bold">Job Title :</span> {job_title}</p>
                    </div>
                    <div className="my-3 flex items-center gap-2">
                        <img className="w-fit" src={Phone} alt="" />
                        <p className="text-[#757575]"><span className="text-black font-bold">Salary :</span> {contact_information.phone}</p>
                    </div>
                    <div className="my-3 flex items-center gap-2">
                        <img className="w-fit" src={Email} alt="" />
                        <p className="text-[#757575]"><span className="text-black font-bold">Salary :</span> {contact_information.email}</p>
                    </div>
                    <div className="my-3 flex items-center gap-2">
                        <img className="h-fit" src={Location} alt="" />
                        <p className="text-[#757575]"><span className="text-black font-bold">Salary :</span> {contact_information.address}</p>
                    </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link><button onClick={notify} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-36">Apply Now</button></Link>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;