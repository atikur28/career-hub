import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="bg-color">
            <nav className="navbar py-6">
             <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     <li><NavLink to="/statistics">Statistics</NavLink></li>
                     <li><NavLink to="/applied-jobs">Applied Jobs</NavLink></li>
                     <li><NavLink to="/blog">Blog</NavLink></li>
                  </ul>
               </div>
               <a className="btn btn-ghost normal-case text-3xl font-bold ml-44">CareerHub</a>
             </div>
             <div className="navbar-center hidden lg:flex gap-10">
                 <NavLink to="/statistics">Statistics</NavLink>
                 <NavLink to="/applied-jobs">Applied Jobs</NavLink>
                 <NavLink to="/blog">Blog</NavLink>
             </div>
             <div className="navbar-end">
               <a className="btn mr-44 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Star Applying</a>
             </div>
            </nav>
        </div>
    );
};

export default Header;