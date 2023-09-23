const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveAppliedJobs = id => {
    const storedJobApplication = getStoredJobApplication();
    const exist = storedJobApplication.find( jobId => jobId === id );
    if(!exist){
        storedJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication));
    }
}

export { getStoredJobApplication, saveAppliedJobs };

