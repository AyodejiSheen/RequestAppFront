import React, { useContext, useState, useEffect } from 'react'
import img1 from '../../../media/messages-1.jpg'
import { Formik, Form, Field, ErrorMessage } from "formik";   //to make use of formik to handle the form creation for the posts
import * as Yup from 'yup'
import UserContext from '../../../context/user/context'






export const EditProfile = () => {

    const [onChange, setOnchange] = useState(false)

    let { user, EditUserProfile } = useContext(UserContext);


    const intialValues = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        about: user.about
    }

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("Please input your firstname"),  //i.e it must be a string and its required
        lastname: Yup.string().required("Please input your firstname"), //error message is defined for required
        phone: Yup.string().min(10).max(12).required("Please input your phone number"),
        about: Yup.string().min(10).max(200),
        email: Yup.string().email('Invalid email').required('Email is required'),
    })


    const setchange = () => {
        setOnchange(true)
    }


    const onSubmit = (data) => {
        let details = {...data, id:user.id};
        EditUserProfile(details)
    }




    return (
        <>

            <Formik initialValues={intialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <div className='md:flex md:space-x-10 lg:space-x-20 xl:space-x-24 items-center mb-6'>
                        <div className='w-32 space-y-3'>
                            <img src={img1} alt="profile pics" />
                            <div className='flex space-x-4 justify-center text-purple-600 '>
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>

                        <div className='flex-1 space-y-4 mt-6 md:mt-0'>
                            <div>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Firstname</span>
                                    <Field
                                        name="firstname"
                                        onFocus={setchange}
                                        className="block w-full mt-1 border p-2.5 font-medium text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        type="text" />
                                    <ErrorMessage name="firstname" component="span" className="text-red-500" />
                                </label>
                            </div>

                            <div>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Lastname</span>
                                    <Field name="lastname"
                                        onFocus={setchange}

                                        className="block w-full mt-1 border p-2.5 font-medium text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        type="text" />
                                    <ErrorMessage name="lastname" component="span" className="text-red-500" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 space-y-4'>
                        <div>
                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Email Address</span>
                                <Field
                                    name="email"
                                    onFocus={setchange}
                                    className="block w-full mt-1 border p-2.5 font-medium text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    type="email" />
                                <ErrorMessage name="email" component="span" className="text-red-500" />
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Phone Number</span>
                                <Field
                                    name="phone"
                                    onFocus={setchange}
                                    className="block w-full mt-1 border p-2.5 font-medium text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    type="number" />
                                <ErrorMessage name="phone" component="span" className="text-red-500" />
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">About</span>
                                <Field
                                    onFocus={setchange}
                                    as="textarea"
                                    rows="4"
                                    name="about"
                                    className="block w-full mt-1 border p-2.5 font-medium text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    type="text" />
                                <ErrorMessage name="about" component="span" className="text-red-500" />
                            </label>
                        </div>
                    </div>

                    <button type='submit' className={` text-sm mt-5 text-white px-5 py-3 rounded-lg shadow-md shadow-purple-300 dark:shadow-gray-900 ${onChange ? "bg-purple-700" : "bg-purple-300"}`} >Save Changes</button>


                </Form>
            </Formik>

        </>
    )
}