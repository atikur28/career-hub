import PropTypes from "prop-types";

const Job = ({job}) => {
    const {logo, category_name, availability} = job;
    return (
        <div className="w-72 p-4 rounded-md bg-gradient-to-r from-[#7E90FE0A] to-[#9873FF0A]">
            <div className="my-3">
                <img src={logo} alt="logo" />
            </div>
            <h5 className="my-2 text-lg font-semibold">{category_name}</h5>
            <p className="text-sm text-[#757575]">{availability}</p>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}

export default Job;