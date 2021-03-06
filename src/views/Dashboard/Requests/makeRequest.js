import React, { useContext, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import img from '../../../media/not-found.svg'
import { motion, AnimatePresence } from "framer-motion"; //check note.txt for notes on framer motion
import RequestContext from '../../../context/requests/context';
import UserContext from '../../../context/user/context';




export const MakeRequests = () => {


    let {MakeRequests} = useContext(RequestContext);

    //creating  intialvalues for formik
    const intialValues = {
        requestTitle: "",// for title field
        itemName: "",
        itemDesc: "",
        quantity: "",
        itemLoc: "",
        requestBody: "",
        status:"Pending"
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



    const CreatRequest = (data, {resetForm})=> {
        MakeRequests(data);
        resetForm();
    }


    return (
        <>

            <div className="container mx-auto pb-16 pt-2">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Create A Request</h2>

                <div className=''>
                    <div className='w-full'>
                        <Formik initialValues={intialValues} validationSchema={validationSchema} onSubmit={CreatRequest}>
                            <Form>
                                <div className="2xl:px-24 2xl:py-16 md:px-14 py-14 mb-8 md:bg-white rounded-lg md:shadow-md md:dark:bg-gray-800 space-y-4">
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

                                    <div className=''>
                                        <button
                                            className=" w-full  px-4 py-3.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-5 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" type='submit'
                                        >
                                            Submit
                                        </button>
                                    </div>

                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>



            </div>



        </>
    )
}