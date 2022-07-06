import React, { useContext } from 'react'
import { motion, AnimatePresence } from "framer-motion"; //check note.txt for notes on framer motion
import UIContext from '../context/UI/context';
import UserContext from '../context/user/context';
import { Link } from 'react-router-dom';





export const ProfileNav = (props) => {

    let { showProfile } = props

    let { isDark } = useContext(UIContext)

    let {user, logout} = useContext(UserContext)


    return (
        <>

            {
                showProfile && (

                    <div className={isDark ? "dark" : "''"}>
                        <motion.div
                            animate={{ y: [0, 50, 25, 50], scale: 1 }}
                            initial={{ scale: 0 }}
                            transition={{ type: "twin", ease: "easeInOut" }}
                        >
                            <div className='absolute w-52 lg:w-64 bg-white dark:bg-gray-800 shadow-xl  -top-4 dark:shadow-gray-900 -right-0 rounded-lg py-4'>
                                <div className=''>
                                    <div className='px-4 pb-4'>
                                        <div className='text-center'>
                                            <p className='text-lg font-bold text-gray-800 dark:text-gray-200 '>{user.firstname} {user.lastname}</p>
                                            <p className='text-sm text-gray-800 dark:text-gray-200 '>{user.email}</p>
                                        </div>
                                    </div>
                                    <hr className='dark:opacity-10' />
                                </div>

                                <Link to={`profile/${user.id}`}>
                                    <div className='px-6 py-3 cursor-pointer hover:bg-purple-50 hover:dark:bg-gray-700'>
                                        <div className='flex gap-5 items-center'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>

                                            <div className='text-gray-600 dark:text-gray-300 flex-1 text-sm space-y-1'>
                                                <p className='lg:text-base font-medium'> My Profile</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='dark:opacity-10' />
                                </Link>


                                <div>
                                    <div className='px-6 py-3 cursor-pointer hover:bg-purple-50 hover:dark:bg-gray-700'>
                                        <div className='flex gap-5 items-center'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>

                                            <div className='text-gray-600 dark:text-gray-300 flex-1 text-sm space-y-1'>
                                                <p className='lg:text-base font-medium'>Account Settings</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='dark:opacity-10' />
                                </div>


                                <div>
                                    <div className='px-6 py-3 cursor-pointer hover:bg-purple-50 hover:dark:bg-gray-700'>
                                        <div className='flex gap-5 items-center'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>

                                            <div className='text-gray-600 dark:text-gray-300 flex-1 text-sm space-y-1'>
                                                <p className='lg:text-base font-medium'>Need Help?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='dark:opacity-10' />
                                </div>

                                <div onClick={logout}>
                                    <div className='px-6 py-3 cursor-pointer hover:bg-purple-50 hover:dark:bg-gray-700'>
                                        <div className='flex gap-5 items-center'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                            </div>

                                            <div className='text-gray-600 dark:text-gray-300 flex-1 text-sm space-y-1'>
                                                <button  className='lg:text-base font-medium'>Sign Out</button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='dark:opacity-10' />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                )
            }

        </>
    )
}