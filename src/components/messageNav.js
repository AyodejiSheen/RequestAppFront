import React, { useContext, useEffect } from 'react'
import UIContext from '../context/UI/context'
import { motion, AnimatePresence } from "framer-motion"; //check note.txt for notes on framer motion

import UserContext from '../context/user/context';


import male from '../media/male.jpg'
import female from '../media/female.jpg'



export const MessageNav = (props) => {


    let { isDark } = useContext(UIContext)
    let { showMsg } = props;

    let { notifications } = useContext(UserContext)
    let { user } = useContext(UserContext)

    return (
        <>
            {
                showMsg && (


                    <div className={isDark ? "dark" : "''"}>
                        <motion.div
                            animate={{ y: [0, 50, 25, 50], scale: 1 }}
                            initial={{ scale: 0 }}
                            transition={{ type: "twin", ease: "easeInOut" }}
                        >
                            <div className='absolute w-80 bg-white dark:bg-gray-800 shadow-xl shadow-gray-400 dark:shadow-gray-900 -right-10 -top-4 rounded-lg py-4'>
                                <div className=''>
                                    <div className='px-4 pb-4'>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-gray-800 dark:text-gray-200 font-semibold'>Notifications</p>
                                            <button className='bg-purple-700 text-sm text-white px-3 py-1.5 rounded-full shadow-md shadow-purple-300 dark:shadow-gray-900'>View all</button>
                                        </div>
                                    </div>
                                    <hr className='dark:opacity-10' />
                                </div>

                                {
                                    notifications.length !== 0 ? (
                                        <div>
                                            {
                                                notifications.slice(0).reverse().map((each) => {
                                                    return (
                                                        <div key={each.id}>
                                                            <div className='p-4 cursor-pointer hover:bg-purple-50'>
                                                                <div className='flex gap-4'>
                                                                    <div className='w-13'>
                                                                        <img src={ user.gender === "male" ? male : female} alt="" className='w-12 h-12 rounded-full'></img>
                                                                    </div>

                                                                    <div className='text-gray-800 dark:text-gray-300 flex-1 text-sm space-y-1'>
                                                                        <p>{each.noteMsg}</p>
                                                                        <p className='text-gray-400'>{each.createdAt}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr className='dark:opacity-10' />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    ) : (
                                        <div>
                                            <p className='text-center text-lg font-semibold dark:text-gray-200'>There is no Notification</p>
                                        </div>
                                    )
                                }

                                {
                                    notifications.length !== 0 && (
                                        <div className='py-1.5'>
                                            <p className='underline text-center text-sm'>Show all messages</p>
                                        </div>
                                    )
                                }

                            </div>
                        </motion.div>
                    </div>

                )
            }


        </>
    )
}