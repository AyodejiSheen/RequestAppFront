import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RequestContext from '../../../context/requests/context';
import UserContext from '../../../context/user/context';





export const ViewRequests = () => {

    let { requestId } = useParams();
    let { ViewRequest, request, isReqLoading } = useContext(RequestContext);
    let { user } = useContext(UserContext)


    useEffect(() => {
        ViewRequest(requestId)
    }, [])

    return (
        <>

            {
                isReqLoading ?
                    <div>
                        <div className="container mx-auto pb-16 pt-2">
                            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Request</h2>

                            <div className='xl:flex xl:gap-28 2xl:gap-40 space-y-6 md:space-y-0'>
                                <div className='xl:w-2/5 dark:bg-gray-800 h-80 rounded-lg py-10 space-y-6 shadow-md'>
                                    <img className="object-cover w-24 mx-auto h-24 rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />

                                    <div className='text-center'>
                                        <p className='dark:text-gray-200 text-3xl font-medium'>{request.firstname + " " + request.lastname}</p>
                                        <p className='dark:text-gray-500'>{request.email}</p>
                                    </div>

                                    <div className='text-center'>
                                        <Link to={`/dashboard/profile/${request.UserId}`}
                                            className="px-4 py-2 shadow-md shadow-purple-300 dark:shadow-gray-900 text-sm  leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                        >
                                            View My Profile
                                        </Link>
                                    </div>

                                </div>

                                <div className='px-8 py-8 shadow-md bg-white dark:bg-gray-800 2xl:w-3/5 rounded-xl'>
                                    <div className='mb-8  pb-4 border-b dark:border-gray-500'>
                                        <div className='flex items-start justify-between'>
                                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Request Details</h2>

                                            <div>
                                                <span className={`${request.status === "Pending" ? "px-2 py-1 text-xs leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600" : "px-2 py-1 text-xs leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"}`}>
                                                    {request.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='space-y-6'>

                                        <div className='space-y-2'>
                                            <p className='text-base font-medium dark:text-gray-400'>Request Title</p>
                                            <p className='dark:text-gray-200 text-xl font-medium'>{request.requestTitle}</p>
                                        </div>

                                        <div className='space-y-2'>
                                            <p className='text-base font-medium dark:text-gray-400'>Request Reason</p>
                                            <p className='dark:text-gray-200 text-base'>{request.requestBody}</p>
                                        </div>

                                        <div className='flex gap-24 xl:gap-56'>
                                            <div>
                                                <p className='text-base font-medium dark:text-gray-400'>Item Name</p>
                                                <p className='dark:text-gray-200 text-base'>{request.itemName}</p>
                                            </div>

                                            <div>
                                                <p className='text-base font-medium dark:text-gray-400'>Quantity</p>
                                                <p className='dark:text-gray-200 text-base'>{request.quantity}</p>
                                            </div>
                                        </div>

                                        <div className='space-y-2'>
                                            <p className='text-base font-medium dark:text-gray-400'>Item Description</p>
                                            <p className='dark:text-gray-200 text-base'>{request.itemDesc}</p>
                                        </div>

                                        <div className='space-y-2'>
                                            <p className='text-base font-medium dark:text-gray-400'>Item Location</p>
                                            <p className='dark:text-gray-200 text-base'>{request.itemLoc}</p>
                                        </div>

                                        <div className='flex gap-10 '>
                                            {
                                                user.id !== request.UserId && (
                                                    <button
                                                        className=" w-full flex-1 px-4 py-3.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-8 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" type='submit'
                                                    >
                                                        Accepted This Request
                                                    </button>
                                                )
                                            }

                                            {
                                                user.id === request.UserId && (
                                                    <button
                                                        className=" w-full flex-1 px-4 py-3.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-8 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" type='submit'
                                                    >
                                                        Edit
                                                    </button>
                                                )
                                            }


                                            {
                                                user.id === request.UserId && (
                                                    <button
                                                        className=" w-full flex-1 px-4 py-3.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-8 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" type='submit'
                                                    >
                                                        Delete
                                                    </button>
                                                )
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> :









                    <div>
                        <p>Loading</p>
                    </div>
            }


        </>
    )
}