import React from 'react';
import * as Yup from 'yup';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import img from '../../../media/not-found.svg'
import { motion, AnimatePresence } from "framer-motion"; //check note.txt for notes on framer motion




export const MakeRequests = () => {

    let today = new Date();
    let day = today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate();

    //creating  intialvalues for formik
    const intialValues = {
        requestTitle: "",// for title field
        requestDate: day,
        itemName: "",
        itemDesc: "",
        quantity: "",
        itemLoc: "",
        requestBody: "",
    }


    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        requestTitle: Yup.string().required("Please input the request Title"),  //i.e it must be a string and its required
        requestDate: Yup.string(),
        itemName: Yup.string().required("Please input the item name"), //error message is defined for required
        itemDesc: Yup.string().required('Please describe the item'),
        quantity: Yup.number().required("Please input the quantity number"),
        itemLoc: Yup.string().required("Enter the item Location"),
        requestBody: Yup.string().min(10).max(200).required("Give reasons for the request"),
    })



    return (
        <>

            <div className="container mx-auto pb-16 pt-2">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Create A Request</h2>

                <div className='lg:flex gap-24'>
                    <div className='w-full lg:w-1/2'>
                        <Formik>
                            <Form>
                                <div className="2xl:px-24 2xl:py-16 px-14 py-14 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-4">
                                    <div className=''>
                                        <label class="block text-sm">
                                            <span class="text-gray-700 dark:text-gray-400">Request Title</span>
                                            <Field
                                                name="requestTitle"
                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="email" />

                                            <ErrorMessage name="requestTitle" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                        </label>
                                    </div>


                                    <div className=''>
                                        <label class="block text-sm">
                                            <span class="text-gray-700 dark:text-gray-400">Item Name</span>
                                            <Field
                                                name="itemName"
                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="email" />

                                            <ErrorMessage name="itemName" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                        </label>
                                    </div>

                                    <div className=''>
                                        <label class="block text-sm">
                                            <span class="text-gray-700 dark:text-gray-400">Item Name</span>
                                            <Field
                                                name="itemName"
                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="email" />

                                            <ErrorMessage name="itemName" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                        </label>
                                    </div>

                                    <div className=''>
                                        <label class="block text-sm">
                                            <span class="text-gray-700 dark:text-gray-400">Item Description</span>
                                            <Field
                                                name="itemDesc"
                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="email" />

                                            <ErrorMessage name="itemDesc" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                        </label>
                                    </div>

                                    <div className=''>
                                        <label class="block text-sm">
                                            <span class="text-gray-700 dark:text-gray-400">Quantity</span>
                                            <Field
                                                name="quantity"
                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="email" />

                                            <ErrorMessage name="quantity" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                        </label>
                                    </div>

                                    <div className=''>
                                        <label class="block text-sm">
                                            <span class="text-gray-700 dark:text-gray-400">Item Location</span>
                                            <Field
                                                name="itemLoc"
                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="email" />

                                            <ErrorMessage name="itemLoc" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                        </label>
                                    </div>

                                    <div className=''>
                                        <label class="block text-sm">
                                            <span class="text-gray-700 dark:text-gray-400">Item Location</span>
                                            <Field
                                                name="itemLoc"
                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="email" />

                                            <ErrorMessage name="itemLoc" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
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
                    {/* animate={{ x: [0, -20, -50, -10], scale: 1 }}
                            initial={{ scale: 0 }} */}

                    <div className='w-full lg:w-1/2'>
                        <motion.div
                            animate={{x:[0, -100, 100, 0], opacity:[0, 0.5, 1, 0]}}
                            transition={{repeat:Infinity, duration: 5}}
                            >
                            <img src={img} className="py-5" alt="Request" />
                        </motion.div>
                    </div>
                </div>



            </div>



        </>
    )
}