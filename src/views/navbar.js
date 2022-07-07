import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import Logo from '../media/loder.png'
import { Alert } from "./alert";
import { Theme } from "../components/theme";
import UIContext from "../context/UI/context";
import { MessageNav } from "../components/messageNav";
import { ProfileNav } from "../components/profileNav";
import UserContext from "../context/user/context";



export const Navbar = () => {

    let { isDark } = useContext(UIContext);
    let { handleAuth } = useContext(UserContext);

    const [mobileNav, setMobileNav] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const toggleNav = () => {
        setMobileNav(!mobileNav)
    }

    const toggleMsg = () => {
        setShowMsg(!showMsg)
    }

    const toggleProfile = () => {
        setShowProfile(!showProfile)
    }


    const navigate = useNavigate()

    
  useEffect( () => {
     handleAuth();
  }, []);



    return (
        <>
            <div className={isDark ? 'dark' : ""}>
                <div className="bg-gray-50 dark:bg-gray-900 flex flex-wrap min-h-screen">
                    {/* mobile navbar backgroun overlay */}
                    <div
                        onClick={toggleNav}
                        className={`fixed inset-0 z-10 flex items-end bg-black bg-opacity-25 sm:items-center sm:justify-center md:hidden ${mobileNav ? "translate-x-0" : "-translate-x-full"}`}
                    ></div>
                    <aside className={`z-20 fixed transform h-screen md:translate-x-0 inset-y-0 left-0 m-top transition duration-300 ease-in-out w-64 md:-mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 ${mobileNav ? "translate-x-0" : "-translate-x-full"}`}>
                        <div className="py-4 text-gray-500 dark:text-gray-400">
                            <div className="mt-3">
                                <Link to="/dashboard" className=" flex items-center space-x-3 ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
                                    <img alt="logo" src={Logo} className="w-8 h-6" />
                                    <p className="">Reqco</p>
                                </Link>
                            </div>

                            <div className="mt-6">
                                <div className="relative">
                                    <NavLink to="/dashboard" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-sm border-l-4  font-medium bg-gray-200 dark:bg-gray-700 rounded border-purple-600 text-purple-800 px-6 py-3 inline-flex items-center w-full md:text-base  md:font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" : "px-6 py-3 inline-flex font-medium items-center w-full md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            ></path>
                                        </svg>
                                        <span className="ml-4 ">Dashboard</span>
                                    </NavLink>
                                </div>

                                <div className="relative">
                                    <NavLink to="requests" onClick={toggleNav} className={({ isActive }) => (isActive ? "border-l-4 rounded font-medium bg-gray-100 dark:bg-gray-700 border-purple-600 text-gray-800 px-6 py-3 inline-flex items-center w-full text-sm md:text-base md:font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" : "px-6 py-3 inline-flex font-medium items-center w-full text-sm md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            ></path>
                                        </svg>
                                        <span className="ml-4 ">Requests</span>
                                    </NavLink>
                                </div>

                                <div className="">
                                    <NavLink to="hh" onClick={toggleNav} className={({ isActive }) => (isActive ? "border-l-4 rounded font-medium bg-gray-100 dark:bg-gray-700 border-purple-600 text-gray-800 px-6 py-3 inline-flex items-center w-full text-sm md:text-base md:font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" : "px-6 py-3 inline-flex font-medium items-center w-full text-sm md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            ></path>
                                        </svg>
                                        <span className="ml-4">Accepted Requests</span>
                                    </NavLink>
                                </div>


                                <div className="">
                                    <NavLink to="hh" onClick={toggleNav} className={({ isActive }) => (isActive ? "border-l-4 rounded bg-gray-100 dark:bg-gray-700 border-purple-600 text-gray-800 px-6 py-3 inline-flex items-center w-full text-sm font-medium md:text-base md:font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" : "px-6 py-3 font-medium inline-flex items-center w-full text-sm md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            ></path>
                                        </svg>
                                        <span className="ml-4">Personal Requests</span>
                                    </NavLink>
                                </div>

                                <div className="px-6 my-6">
                                    <NavLink to="create-a-request">
                                    <button
                                        onClick={toggleNav} className="flex w-full items-center text-sm font-medium md:text-base justify-between px-4 py-2 md:font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    >
                                        Make Requests
                                        <span className="ml-2 text-base" aria-hidden="true">+</span>
                                    </button>
                                    </NavLink>
                                </div>


                            </div>
                        </div>
                    </aside>


                    <div className="flex flex-col md:flex-1 w-full">
                        <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800 fixed w-full">
                            <div className="container flex items-center justify-between h-full px-6 lg:px-32 mx-auto text-purple-600">
                                {/* mobile hambuger */}

                                <button onClick={toggleNav} className=" focus:border-2 p-1 mr-5 -ml-1 rounded-lg md:hidden  focus:shadow-outline-purple">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>

                                {/* search bar */}
                                <div className="flex justify-center flex-1 lg:mr-32 md:ml-64">
                                    <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                                        <div className="absolute inset-y-0 flex items-center pl-2">
                                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for projects" aria-label="Search" />
                                    </div>
                                </div>

                                {/* notifications and profile icons */}
                                <div className="flex items-center flex-shrink-0 space-x-6">
                                    <div className="flex">
                                        <Theme />
                                    </div>

                                    <div className="relative">
                                        <button onClick={toggleMsg} className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                                            </svg>
                                            <span aria-hidden="true" class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
                                        </button>
                                        <MessageNav showMsg={showMsg} />
                                    </div>

                                    <div className="relative">
                                        <button onClick={toggleProfile} className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none">
                                            <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=aa3a807e1bbdfd4364d1f449eaa96d82" alt="" aria-hidden="true" />
                                        </button>

                                        <ProfileNav showProfile={showProfile} />
                                    </div>
                                </div>

                            </div>

                        </header>

                        {/* main display */}
                        <main className="relative overflow-y-auto px-6 lg:px-32 md:ml-64 md:mt-20" onClick={() => {
                            if(showProfile === true){
                                toggleProfile();
                            }else if(showMsg === true){
                                toggleMsg();
                            }
                        }}>
                            <div className="mt-24 md:mt-10">
                                <Outlet />
                            </div>
                        </main>
                    </div>
                </div >
            </div>


        </>
    )
}