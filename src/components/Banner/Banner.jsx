import "./Banner.css";

const Banner = () => {
    return (
        <div className="container mx-auto flex items-center justify-evenly gap-40 py-5 px-10">
            <section className="w-max">
                <h1 className="text-6xl font-bold">One Step <br /> Closer To Your<br /><span className="text-color">Dream Job</span></h1>
                <p className="text-base text-[#757575] my-7">Explore thousands of job opportunities with all the<br />information you need. Its your future. Come find it. Manage all<br />your job application from start to finish.</p>
                <button className="btn btn-color text-white">Get Started</button>
            </section>

            <section>
                <img className="-mb-5" src="https://i.ibb.co/Y2v0Yty/user.png" alt="user-image" />
            </section>
        </div>
    );
};

export default Banner;