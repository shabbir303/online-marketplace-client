import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Login & Register/AuthProvider";
import Dropdown from "./Dropdown";


const Navbar = () => {
    const {user, } = useContext(AuthContext);

    // const handleLogout=()=>{
    //   logOut()
    //   .then(result=>{
    //   console.log(result.user);
    // })
    // .catch(err=>{
    //   console.log(err.message);
    // })
    // }

    const navLinks = <>
        <li><NavLink to='/'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                };
            }}
        >Home</NavLink> </li>
        <li><NavLink to='addjob'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                };
            }}
        >Add Job</NavLink> </li>
        <li><NavLink to='myjob'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                };
            }}
        >My Jobs</NavLink> </li>
        <li><NavLink to='blog'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                };
            }}
        >Blog</NavLink> </li>
        <li><NavLink to='jobDetails'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                };
            }}
        >Job Details</NavLink></li>
        <li><NavLink to='myBids'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                };
            }}
        >My Bids</NavLink></li>
        <li><NavLink to='bidreq'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                };
            }}
        >Bid Request</NavLink></li>
        
    </>
    return (
        <div className="font-Montstreet">
            <header className="   ">
                <div className="block md:hidden ">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn drawer-button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200  text-base-content">
                                {/* Sidebar content here */}
                                {navLinks}

                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="mt-[70px] lg:mt-0 flex flex-col md:flex-col  lg:flex-row items-center">

                            <img src='https://i.ibb.co/pjb5drH/O-1.png' alt="" className='w-[80px] lg:w-[120px] p-[5px] lg:p-[20px] ' />
                            <h1 className=" text-[20px] md:text-[20px] lg:text-[40px] font-bold text-orange-500 italic gap-0">FFreelancer<span className="text-emerald-600 text-[50px]">.</span></h1>

                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-start gap-6 text-sm">
                                    {navLinks}
                                </ul>
                            </nav>
                        </div>
                        

                        <div className="mt-[85px] lg:mt-0 flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                              {
                               user?<Dropdown></Dropdown>: 
                               <Link to='register'>
                               <a
                                    href="javascript:void(0)"
                                    className="uppercase border-secondary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-secondary hover:bg-[#E8FBF6] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
                                >
                                    Register
                                </a>

                               </Link>
                                
                              }

                            </div>


                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;