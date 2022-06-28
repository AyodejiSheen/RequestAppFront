import React, { useContext, useEffect } from 'react'
import { Theme } from '../components/theme'
import UIContext from '../context/UI/context'
import Logo from '../media/loder.png'
import img from '../media/forgot-password-office.jpeg'
import imgDark from '../media/forgot-password-office-dark.jpeg'
import { useParams } from 'react-router-dom'
import UserContext from '../context/user/context'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';





export const ResetPassword = () => {

    let { isDark, setAlert } = useContext(UIContext)
    let { verifyLink, resetPassword } = useContext(UserContext)

    let { id, token } = useParams();

    const resetSchema = Yup.object().shape({
        password: Yup.string().min(4).max(20).required("Enter password"),
        cpassword: Yup.string().min(4).max(20).required("Confirm password"),
    });

    useEffect(() => {
        let data = {
            id: id,
            token: token
        }
        verifyLink(data)
    }, [])


    const finalReset = async (data) => {
        let details = data


        if (details.password !== details.cpassword) {
            let res = {
                altType: "danger",
                altMsg: "Password doesn't match"
            }
            setAlert(res)
        }else{

            let realdata = {
                id : id,
                newPassword: data.password
            }


            await resetPassword(realdata);
        }

    }


    return (
        <>
            <div className={isDark ? "dark" : ""}>

                <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
                    <div
                        className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
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
                                        Reset password
                                    </h1>


                                    <Formik
                                        validationSchema={resetSchema}
                                        initialValues={{ password: '', cpassword: '' }}
                                        onSubmit={finalReset} >
                                        <Form>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm">
                                                        <span className="text-gray-700 dark:text-gray-400">New Password</span>
                                                        <Field
                                                            name="password"
                                                            className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                            type="password"
                                                        />
                                                        <ErrorMessage name="password" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                    </label>
                                                </div>

                                                <div>
                                                    <label className="block text-sm">
                                                        <span className="text-gray-700 dark:text-gray-400">Confirm New Password</span>
                                                        <Field
                                                            name="cpassword"
                                                            className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                            type="password"
                                                        />
                                                        <ErrorMessage name="cpassword" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                    </label>
                                                </div>
                                            </div>
                                            {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
                                            <button
                                                type='submit'
                                                className="block w-full px-4 py-2.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                            >
                                                Reset password
                                            </button>
                                        </Form>
                                    </Formik>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}