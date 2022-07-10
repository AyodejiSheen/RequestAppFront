import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RequestContext from '../../../context/requests/context';
import UserContext from '../../../context/user/context';

import * as Yup from 'yup';
import { Field, Form, ErrorMessage, Formik } from 'formik';
import UIContext from '../../../context/UI/context';



export const ViewRequests = () => {

    let { requestId } = useParams();
    let { ViewRequest, request, isReqLoading, acceptReq, EditRequest } = useContext(RequestContext);
    let { user, authState } = useContext(UserContext)
    let { setAlert } = useContext(UIContext)

    let [edit, setEdit] = useState(false)

    let [the, SetThe] = useState({})

    useEffect(() => {
        if (authState) {
            ViewRequest(requestId)
            if (isReqLoading) {
                SetThe(request)
            }
        }
    }, [authState, isReqLoading])



    const intialValues = {
        requestTitle: the.requestTitle,// for title field
        itemName: the.itemName,
        itemDesc: the.itemDesc,
        quantity: the.quantity,
        itemLoc: the.itemLoc,
        requestBody: the.requestBody,
        status: the.status
    }


    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        requestTitle: Yup.string().required("Please input the request title"), //error message is defined for required
        itemName: Yup.string().required("Please input the item name"), //error message is defined for required
        itemDesc: Yup.string().required('Please describe the item'),
        quantity: Yup.number().required("Please input the quantity number"),
        itemLoc: Yup.string().required("Enter the item Location"),
        requestBody: Yup.string().min(10).max(500).required("Give reasons for the request"),
    })


    const EditReq = (data, { resetForm }) => {

            EditRequest({
                data, 
                id:the.id
            });

            resetForm();
            setEdit(false)       

    }




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
                                        <p className='dark:text-gray-200 text-3xl font-medium capitalize'>{request.firstname + " " + request.lastname}</p>
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
                                    {
                                        !edit ? (
                                            <>
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

                                                    <div className='md:flex gap-10 '>
                                                        {
                                                            user.id !== request.UserId && (
                                                                <button
                                                                    onClick={() => acceptReq({ userid: user.id, requestid: request.id })}
                                                                    disabled={request.status === "Approved"}
                                                                    className=" w-full md:flex-1 px-4 py-3.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-8 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                                                >
                                                                    {request.status === "Approved" ? "Request Has Been Accepted" : "Accept This Request"}
                                                                </button>
                                                            )
                                                        }

                                                        {
                                                            user.id === request.UserId && (
                                                                <button
                                                                    onClick={() => {
                                                                        if (request.status === "Approved") {
                                                                            let res = {
                                                                                altType: "warning",
                                                                                altMsg: "You can't edit Request onces its accepted"
                                                                            }
                                                                            setAlert(res)
                                                                        } else {
                                                                            setEdit(true)
                                                                        }
                                                                    }}
                                                                    className=" w-full md:flex-1 px-4 py-3.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-8 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                                                >
                                                                    Edit
                                                                </button>
                                                            )
                                                        }


                                                        {
                                                            user.id === request.UserId && (
                                                                <button
                                                                    className=" w-full md:flex-1 px-4 py-3.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-8 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-rose-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-rose-700 focus:outline-none focus:shadow-outline-purple"
                                                                >
                                                                    Delete
                                                                </button>
                                                            )
                                                        }
                                                    </div>

                                                </div>
                                            </>
                                        ) : (

                                            <div>

                                                <div className='w-full'>

                                                    <Formik initialValues={intialValues} validationSchema={validationSchema} onSubmit={EditReq}>
                                                        <Form>
                                                            <div className="dark:bg-gray-800 space-y-4">
                                                                <div className='mb-8  pb-4 border-b dark:border-gray-500'>
                                                                    <div className='flex items-start justify-between'>
                                                                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Edit Details</h2>

                                                                        <div>
                                                                            <span className={`${request.status === "Pending" ? "px-2 py-1 text-xs leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600" : "px-2 py-1 text-xs leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"}`}>
                                                                                {request.status}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className=''>
                                                                    <label className="block text-sm">
                                                                        <span className="text-gray-700 dark:text-gray-400">Request Title</span>
                                                                        <Field
                                                                            name='requestTitle'
                                                                            className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="text"
                                                                        />
                                                                        <div className='text-gray-500'>
                                                                            <label> I Need help  </label><Field name="requestTitle" disabled={true} />
                                                                        </div>
                                                                        <ErrorMessage name="requestTitle" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                                    </label>
                                                                </div>


                                                                <div className=''>
                                                                    <label className="block text-sm">
                                                                        <span className="text-gray-700 dark:text-gray-400">Item Name</span>
                                                                        <Field
                                                                            name="itemName"
                                                                            className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="text" />

                                                                        <ErrorMessage name="itemName" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                                    </label>
                                                                </div>

                                                                <div className=''>
                                                                    <label className="block text-sm">
                                                                        <span className="text-gray-700 dark:text-gray-400">Item Description</span>
                                                                        <Field
                                                                            name="itemDesc"
                                                                            className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="text" />

                                                                        <ErrorMessage name="itemDesc" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                                    </label>
                                                                </div>

                                                                <div className=''>
                                                                    <label className="block text-sm">
                                                                        <span className="text-gray-700 dark:text-gray-400">Quantity</span>
                                                                        <Field
                                                                            name="quantity"
                                                                            className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="number" />

                                                                        <ErrorMessage name="quantity" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                                    </label>
                                                                </div>

                                                                <div className=''>
                                                                    <label class="block text-sm">
                                                                        <span class="text-gray-700 dark:text-gray-400">Item Location</span>
                                                                        <Field
                                                                            name="itemLoc"
                                                                            className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="text" />

                                                                        <ErrorMessage name="itemLoc" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                                    </label>
                                                                </div>

                                                                <div className=''>
                                                                    <label className="block text-sm">
                                                                        <span className="text-gray-700 dark:text-gray-400">Request Reason</span>
                                                                        <Field
                                                                            as="textarea"
                                                                            rows="4"
                                                                            name="requestBody"
                                                                            className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="text" />

                                                                        <ErrorMessage name="requestBody" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                                    </label>
                                                                </div>

                                                                <div className='md:flex gap-10'>

                                                                    <div
                                                                        onClick={() => { setEdit(false) }}
                                                                        className=" w-full  px-4 py-3.5 shadow-md
                                                                        text-black dark:shadow-gray-900 mt-5 text-sm font-medium leading-5 text-center hover:text-white transition-colors duration-150 bg-gray-200 border border-transparent rounded-lg active:bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline-purple cursor-pointer"
                                                                    >
                                                                        Cancel
                                                                    </div>

                                                                    <button
                                                                        className=" w-full  px-4 py-3.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-5 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" type='submit'
                                                                    >
                                                                        Save Changes
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </Form>
                                                    </Formik>
                                                </div>
                                            </div>

                                        )
                                    }
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