import React, { useContext, useState } from 'react'
import { Theme } from '../components/theme'
import UIContext from '../context/UI/context'
import Logo from '../media/loder.png'
import img from '../media/create-account-office.jpeg'
import imgDark from '../media/create-account-office-dark.jpeg'
import { Link } from 'react-router-dom'


import { Formik, Form, Field, ErrorMessage } from "formik";   //to make use of formik to handle the form creation for the posts
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrl from '../baseUrl';
import UserContext from '../context/user/context'

import { motion, AnimatePresence } from "framer-motion"; //check note.txt for notes on framer motion













export const Signup = () => {

    let { isDark, setAlert } = useContext(UIContext)

    let { signup } = useContext(UserContext)

    const navigate = useNavigate();

    const [sign, setSign] = useState(false)


    //creating  intialvalues for formik
    const intialValues = {
        firstname: "",// for title field
        lastname: "",
        gender: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        about: "Hi, Am here on Reqco!"
    }


    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("Please input your firstname"),  //i.e it must be a string and its required
        lastname: Yup.string().required("Please input your firstname"), //error message is defined for required
        gender: Yup.string().required("Please select input your gender"), //error message is defined for required
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().min(10).max(12).required("Please input your phone number"),
        password: Yup.string().min(4).max(20).required("Enter password"),
        cpassword: Yup.string().min(4).max(20).required("Enter password"),
        about: Yup.string().min(10).max(200),
    })



    const onSubmit = (data, { resetForm }) => {
        setSign(true)
        setTimeout(async () => {
            let details = data;
            if (details.cpassword !== details.password) {
                let res = {
                    altType: "danger",
                    altMsg: "Password doesn't Match"
                }
                setAlert(res)
                setSign(false)
            } else {
                let signingup = await signup(data);
                if (signingup) {
                    setSign(true)
                } else {
                    setSign(false)
                }
            }
        }, 2000)
    }



    

    return (
        <>
            <div className={isDark ? "dark" : ""}>

                <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
                    <div
                        className="flex-1 h-full max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
                    >
                        <div className="flex flex-col overflow-y-auto md:flex-row">
                            <div className="h-32 md:h-auto md:w-1/2">
                                <img
                                    aria-hidden="true"
                                    className="object-cover w-full h-full dark:hidden"
                                    src={img}
                                    alt="Office"
                                />
                                <img
                                    aria-hidden="true"
                                    className="hidden object-cover w-full h-full dark:block"
                                    src={imgDark}
                                    alt="Office"
                                />
                            </div>
                            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                                <div className="w-full">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-3 items-center'>
                                            <img alt='logo' src={Logo} className="text-center w-4/12 py-5" />
                                            <p className='font-medium text-purple-800'>Reqco</p>
                                        </div>
                                        <Theme />
                                    </div>

                                    <h1
                                        className="mt-4 mb-7 text-xl font-semibold text-gray-700 dark:text-gray-200"
                                    >
                                        Create account
                                    </h1>


                                    <div className='space-y-4'>
                                        <Formik initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                                            <Form>
                                                <div className='lg:flex lg:space-x-6 mb-4 lg:mb-0 space-y-4 lg:space-y-0 justify-between lg:py-1.5'>

                                                    <div>
                                                        <label className="block text-sm">
                                                            <span className="text-gray-700 dark:text-gray-400">Firstname</span>
                                                            <Field
                                                                type="text"
                                                                name="firstname"
                                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                                placeholder="John"
                                                            />
                                                            <ErrorMessage name="firstname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                        </label>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm">
                                                            <span className="text-gray-700 dark:text-gray-400">Lastname</span>
                                                            <Field
                                                                type="text"
                                                                name="lastname"
                                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                                placeholder="Doe"
                                                            />
                                                            <ErrorMessage name="lastname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                        </label>
                                                    </div>


                                                </div>

                                                <div className='lg:flex lg:space-x-6 space-y-4 lg:space-y-0 justify-between lg:py-1.5'>
                                                    <div className='w-full lg:w-1/2'>
                                                        <label className="block text-sm">
                                                            <span className="text-gray-700 dark:text-gray-400">Gender</span>
                                                            <Field
                                                                as="select"
                                                                type="text"
                                                                name="gender"
                                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input">
                                                                <option selected>Select gender</option>
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                            </Field>
                                                            <ErrorMessage name="gender" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                        </label>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm">
                                                            <span className="text-gray-700 dark:text-gray-400">Phone Number</span>
                                                            <Field
                                                                name="phone"
                                                                type="number"
                                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                                placeholder="080100000"
                                                            />
                                                            <ErrorMessage name="phone" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className='my-4 md:mt-0 lg:py-1.5'>
                                                    <label className="block text-sm">
                                                        <span className="text-gray-700 dark:text-gray-400">Email Address</span>
                                                        <Field
                                                            type="text"
                                                            name="email"
                                                            className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                        />
                                                        <ErrorMessage name="email" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                    </label>
                                                </div>


                                                <div className='lg:flex lg:space-x-6 space-y-4 lg:space-y-0 justify-between lg:py-1.5'>
                                                    <div>
                                                        <label className="block text-sm">
                                                            <span className="text-gray-700 dark:text-gray-400">Password</span>
                                                            <Field
                                                                type="password"
                                                                name="password"
                                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                            />
                                                            <ErrorMessage name="password" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                        </label>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm">
                                                            <span className="text-gray-700 dark:text-gray-400">Confirm Password</span>
                                                            <Field
                                                                type="password"
                                                                name="cpassword"
                                                                className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                            />
                                                            <ErrorMessage name="cpassword" component="span" className="text-red-500" /> {/*to display the error message for the field*/}

                                                        </label>
                                                    </div>
                                                </div>
                                                {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
                                                <button
                                                    className="block w-full px-4 py-2.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-4 text-sm font-medium text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" type='submit'
                                                >
                                                    {sign ? (
                                                        <motion.div
                                                            animate={{ x: [-20, 20], y: [0, -10] }}
                                                            transition={{ x: { yoyo: Infinity, duration: 0.5 }, y: { yoyo: Infinity, duration: 0.25, ease: 'easeInOut' } }}
                                                            className="w-3 h-3 rounded-full bg-white mx-auto my-1.5"
                                                        >

                                                        </motion.div>
                                                    ) : "Create Account"}
                                                </button>
                                            </Form>
                                        </Formik>
                                    </div>


                                    <hr class="my-8" />

                                    <button
                                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                                    >
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                            />
                                        </svg>
                                        Github
                                    </button>

                                    <button
                                        className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                                    >
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                                            />
                                        </svg>
                                        Twitter
                                    </button>

                                    <p className="mt-4">
                                        <Link to="/login"
                                            className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                        >
                                            Already have an account? Login
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}