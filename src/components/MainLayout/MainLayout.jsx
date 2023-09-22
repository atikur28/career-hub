import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";

    const createdRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home></Home>,
        }
    ])

export default createdRouter;