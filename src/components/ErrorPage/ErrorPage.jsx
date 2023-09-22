import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id="error-page" className="text-center md:my-60 lg:my-96">
            <h1 className="text-3xl font-bold">Oops...!!!</h1>
            <p className="text-lg font-semibold my-3">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg font-medium mb-5">
                <i>404 {error.statusText || error.message}!</i>
            </p>
            <Link to="./"><span className="bg-sky-400 py-2 px-3 rounded-lg text-white">Go Home</span></Link>
        </div>
    );
};

export default ErrorPage;