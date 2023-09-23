import { createBrowserRouter } from "react-router-dom";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import JobDetails from "../FeaturedJobs/JobDetails";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Statistics from "../Statistics/Statistics";

    const createdRouter = createBrowserRouter([
        {
            path: "/",
            element: <Root></Root>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: "/",
                    element: <Home></Home> 
                },
                {
                    path: "/statistics",
                    element: <Statistics></Statistics>
                },
                {
                    path: "/applied-jobs",
                    loader: () => fetch('/jobs.json'),
                    element: <AppliedJobs></AppliedJobs>
                },
                {
                    path: "/blog",
                    element: <Blog></Blog>
                },
                {
                    path: "/job/:id",
                    element: <JobDetails></JobDetails>,
                    loader: () => fetch('../jobs.json')
                }
            ]
        }
    ])

export default createdRouter;