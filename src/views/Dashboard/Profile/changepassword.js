import React from 'react'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';





export const ChangePassword = () => {



    const changeSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });



    return (
        <>



                        <div className="flex items-center justify-center">
                            <div className="w-full">
                                <h1 className="mt-4 mb-7 text-xl font-semibold text-gray-700 dark:text-gray-200"> Change Password</h1>

                                <Formik
                                    validationSchema={changeSchema}
                                    initialValues={{ oldPassword: '', NewPassword: '' }}
                                    onSubmit={() => console.log("welcome")}
                                >
                                    <Form>
                                        <label className="block text-sm">
                                            <span className="text-gray-700 dark:text-gray-400">Old Password</span>
                                            <Field name="oldPassword" className="block w-full mt-1 border p-2.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="password" />
                                            <ErrorMessage name="oldPassword" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                        </label>

                                        <label className="block mt-4 text-sm">
                                            <span className="text-gray-700 dark:text-gray-400">New Password</span>
                                            <Field name="NewPassword" className="block w-full mt-1 border p-2.5 font-medium text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input" type="password" />
                                            <ErrorMessage name="NewPassword" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                        </label>

                                        {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
                                        <button className='bg-purple-700 text-sm mt-5 text-white px-5 py-3 rounded-lg shadow-md shadow-purple-300 dark:shadow-gray-900' type='submit'>Save Changes</button>
                                    </Form>
                                </Formik>




                            </div>
                        </div>


        </>
    )
}