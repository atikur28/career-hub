import { createBrowserRouter } from "react-router-dom";
import Statistics from "../Statistics/Statistics";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Home from "../Home/Home";

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
                    element: <AppliedJobs></AppliedJobs>
                },
                {
                    path: "/blog",
                    element: <Blog></Blog>
                }
            ]
        }
    ])

export default createdRouter;