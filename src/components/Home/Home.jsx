import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">This is Home Page</h2>
            <div className="min-h-screen">
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;