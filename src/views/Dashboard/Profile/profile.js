import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import baseUrl from '../../../baseUrl'
import UIContext from '../../../context/UI/context'
import UserContext from '../../../context/user/context'
import { ChangePassword } from './changepassword'
import { EditProfile } from './editprofile'
import { Settings } from './settings'


import male from '../../../media/male.jpg'
import female from '../../../media/female.jpg'




export const Profile = () => {

    const [tab, setTab] = useState("overview")

    const changeTab = (value) => {
        setTab(value)
    }

    let { user, authState, EditUserProfile } = useContext(UserContext);
    let { setAlert } = useContext(UIContext)

    let { id } = useParams();
    const [eachUser, setEachUser] = useState({});

    let navigate = useNavigate();

    const onSubmit = (data) => {
        let details = { ...data, id: user.id };
        setEachUser({
            ...eachUser,
            email: details.email,
            about: details.about,
            phone: details.phone
        })
        EditUserProfile(details)
    }


    useEffect(() => {
        let token = localStorage.getItem('JWTR')
         axios.get(`${baseUrl.baseUrl}/user/profile/${id}`, {
            headers: { accessToken: token }
        }).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
                navigate('/');
            } else {
                setEachUser(response.data)
            }
        }).catch((err) => {
            let res = {
                altType: "danger",
                altMsg: "Server Error"
            }
            setAlert(res)
            navigate('/');
        })

    }, [])




    return (
        <>
            {

                authState ?

                    <div className="container mx-auto pb-16 pt-2">
                        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Profile</h2>

                        <div className='xl:flex space-y-12 xl:space-y-0 xl:space-x-16'>
                            <div className='w-full xl:w-2/5 h-80 dark:bg-gray-800 rounded-md p-8 shadow-lg text-center'>
                                <div>
                                    <img src={eachUser.gender === "male" ? male : female} alt="DP" className='rounded-full mx-auto w-36' />
                                </div>
                                <div className='space-y-3 mt-6 dark:text-white'>
                                    <h2 className='text-4xl font-semibold capitalize'>{eachUser.firstname} {eachUser.lastname}</h2>
                                    <p className=' text-base'>{eachUser.email}</p>
                                </div>
                            </div>

                            <div className='w-full xl:w-3/5 dark:bg-gray-800  pb-6  rounded-md shadow-lg'>
                                <div className=''>
                                    <div className=''> 
                                        <div className='block lg:flex text-center lg:text-left px-8 space-y-3 pt-6 lg:space-y-0 lg:py-3'>
                                            <button onClick={() => changeTab("overview")} className='dark:text-gray-400 focus:dark:text-gray-100 flex-1 focus:border-b-2 px-3 pb-2 focus:font-medium focus:border-purple-600 '>Overview</button>
                                            {
                                                eachUser.id === user.id && (
                                                    <button onClick={() => changeTab("profile")} className='dark:text-gray-400 flex-1 focus:dark:text-gray-100 focus:border-b-2 px-3 pb-2 focus:font-medium focus:border-purple-600'>Edit Profile</button>
                                                )
                                            }

                                            {
                                                eachUser.id === user.id && (
                                                    <button onClick={() => changeTab("settings")} className='dark:text-gray-400 focus:dark:text-gray-100 flex-1 focus:border-b-2 px-3 pb-2 focus:font-medium focus:border-purple-600 '>Settings</button>
                                                )
                                            }

                                            {
                                                eachUser.id === user.id && (
                                                    <button onClick={() => changeTab("changepd")} className='dark:text-gray-400 focus:dark:text-gray-100 flex-1 focus:border-b-2 px-3 pb-2 focus:font-medium focus:border-purple-600 '>Change Password</button>
                                                )
                                            }
                                        </div>
                                        <hr className='dark:opacity-20' />
                                    </div>

                                    <div>
                                        <div hidden={tab !== "overview"} className="px-10 py-6 dark:text-gray-300 space-y-9">
                                            <div className='space-y-5'>
                                                <h2 className='text-xl font-semibold dark:text-gray-400'>About</h2>
                                                <p>{eachUser.about}</p>
                                            </div>

                                            <div className='space-y-5'>
                                                <h2 className='text-xl font-semibold dark:text-gray-400'>Profile Details</h2>
                                                <div className='space-y-6'>
                                                    <div className='flex  flex-wrap space-x-10 md:space-x-24 items-center'>
                                                        <p className='w-32 font-bold text-gray-500'>Firstname</p>
                                                        <p className='flex-1'>{eachUser.firstname}</p>
                                                    </div>

                                                    <div className='flex  flex-wrap space-x-10 md:space-x-24 items-center'>
                                                        <p className='w-32 font-bold text-gray-500'>Lastname</p>
                                                        <p className='flex-1'>{eachUser.lastname}</p>
                                                    </div>

                                                    <div className=''>
                                                        <p className='w-32 font-bold text-gray-500'>Email</p>
                                                        <p className='flex-1'>{eachUser.email}</p>
                                                    </div>

                                                    <div className='flex  flex-wrap space-x-10 md:space-x-24 items-center'>
                                                        <p className='w-32 font-bold text-gray-500'>Gender</p>
                                                        <p className='flex-1'>{eachUser.gender}</p>
                                                    </div>

                                                    <div className='flex  flex-wrap space-x-10 md:space-x-24 items-center'>
                                                        <p className='w-32 font-bold text-gray-500'>Phone Number</p>
                                                        <a href={`tel:${eachUser.phone}`} className='flex-1'>{eachUser.phone} <span className='text-xs text-gray-600'>Click to place a call</span></a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            eachUser.id === user.id && (
                                                <div hidden={tab !== "profile"} className="px-10 py-6 dark:text-gray-300">
                                                    <EditProfile onSubmit={onSubmit} />
                                                </div>
                                            )

                                        }

                                        {
                                            eachUser.id === user.id && (
                                                <div hidden={tab !== "settings"} className="px-10 py-6 dark:text-gray-300">
                                                    <Settings />
                                                </div>
                                            )

                                        }


                                        {
                                            eachUser.id === user.id && (
                                                <div hidden={tab !== "changepd"} className="px-10 py-6 dark:text-gray-300">
                                                    <ChangePassword />
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='text-center mt-6 xl:mt-24 text-sm dark:text-gray-500 border-t pt-8 '>
                            <p>© Copyright Ayodeji. All Rights Reserved</p>
                            <p>Designed by Ayodeji</p>
                        </div>

                    </div> :

                    <p>Loading.....</p>

            }

        </>
    )
}