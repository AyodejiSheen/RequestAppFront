import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../../context/user/context'
import img1 from '../../../media/messages-1.jpg'
import { ChangePassword } from './changepassword'
import { EditProfile } from './editprofile'
import { Settings } from './settings'






export const Profile = () => {


    const [tab, setTab] = useState("overview")

    const changeTab = (value) => {
        setTab(value)
    }

    let { user } = useContext(UserContext);

    console.log(user)



    return (
        <>
            <div className="container mx-auto pb-16 pt-2">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Profile</h2>

                <div className='xl:flex space-y-12 xl:space-y-0 xl:space-x-16'>
                    <div className='w-full xl:w-2/5 h-80 dark:bg-gray-800 rounded-md p-8 shadow-lg text-center'>
                        <div>
                            <img src={img1} alt="DP" className='rounded-full mx-auto' />
                        </div>
                        <div className='space-y-3 mt-6 dark:text-white'>
                            <h2 className='text-4xl font-semibold '>{user.firstname} {user.lastname}</h2>
                            <p className=' text-base'>{user.email}</p>
                        </div>
                    </div>

                    <div className='w-full xl:w-3/5 dark:bg-gray-800  pb-6  rounded-md shadow-lg'>
                        <div className=''>
                            <div>
                                <div className='block lg:flex justify-between text-center ld:text-left px-8 space-y-3 pt-6 lg:space-y-0 lg:py-3'>
                                    <button onClick={() => changeTab("overview")} className='dark:text-gray-400 focus:dark:text-gray-100 focus:border-b-2 px-3 pb-2 focus:font-medium focus:border-purple-600 '>Overview</button>
                                    <button onClick={() => changeTab("profile")} className='dark:text-gray-400 focus:dark:text-gray-100 focus:border-b-2 px-3 pb-2 focus:font-medium focus:border-purple-600 '>Edit Profile</button>
                                    <button onClick={() => changeTab("settings")} className='dark:text-gray-400 focus:dark:text-gray-100 focus:border-b-2 px-3 pb-2 focus:font-medium focus:border-purple-600 '>Settings</button>
                                    <button onClick={() => changeTab("changepd")} className='dark:text-gray-400 focus:dark:text-gray-100 focus:border-b-2 px-3 pb-2 focus:font-medium focus:border-purple-600 '>Change Password</button>
                                </div>
                                <hr className='dark:opacity-20' />
                            </div>

                            <div>
                                <div hidden={tab !== "overview"} className="px-10 py-6 dark:text-gray-300 space-y-9">
                                    <div  className='space-y-5'>
                                        <h2 className='text-xl font-semibold dark:text-gray-400'>About</h2>
                                        <p>Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>
                                    </div>

                                    <div className='space-y-5'>
                                        <h2 className='text-xl font-semibold dark:text-gray-400'>Profile Details</h2>
                                        <div  className='space-y-6'>
                                            <div className='flex  flex-wrap space-x-10 md:space-x-24 items-center'>
                                                <p className='w-32 font-bold text-gray-500'>Firstname</p>
                                                <p className='flex-1'>{user.firstname}</p>
                                            </div>

                                            <div className='flex  flex-wrap space-x-10 md:space-x-24 items-center'>
                                                <p className='w-32 font-bold text-gray-500'>Lastname</p>
                                                <p className='flex-1'>{user.lastname}</p>
                                            </div>

                                            <div className=''>
                                                <p className='w-32 font-bold text-gray-500'>Email</p>
                                                <p className='flex-1'>{user.email}</p>
                                            </div>

                                            <div className='flex  flex-wrap space-x-10 md:space-x-24 items-center'>
                                                <p className='w-32 font-bold text-gray-500'>Gender</p>
                                                <p className='flex-1'>{user.gender}</p>
                                            </div>

                                            <div className='flex  flex-wrap space-x-10 md:space-x-24 items-center'>
                                                <p className='w-32 font-bold text-gray-500'>Phone Number</p>
                                                <p className='flex-1'>{user.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div hidden={tab !== "profile"} className="px-10 py-6 dark:text-gray-300">
                                    <EditProfile/>
                                </div>

                                <div hidden={tab !== "settings"} className="px-10 py-6 dark:text-gray-300">
                                    <Settings/>
                                </div>

                                <div hidden={tab !== "changepd"} className="px-10 py-6 dark:text-gray-300">
                                    <ChangePassword/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



        <div className='text-center mt-6 text-sm dark:text-gray-500 border-t pt-8 fixed bottom-24'>
            <p>© Copyright Ayodeji. All Rights Reserved</p>
            <p>Designed by Ayodeji</p>
        </div>

            </div>

        </>
    )
}