import React from 'react';








export const Settings = () => {
    return (
        <>
            <div className='flex space-x-12'>

                <div>
                    <p>Email Notifications</p>
                </div>

                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <div>
                            <input type="checkbox" className='w-6 h-5 rounded-full mr-3'></input>
                        </div>
                        <div>
                            <label>Changes made to your account</label>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div>
                            <input type="checkbox" className='w-6 h-5 rounded-full mr-3'></input>
                        </div>

                        <div>
                            <label>Information on new products and services</label>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div>
                            <input type="checkbox" className='w-6 h-5 rounded-full mr-3'></input>
                        </div>
                        <div>
                            <label>Marketing and promo offers</label>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div>
                            <input type="checkbox" ddefaultChecked className='w-6 h-5 rounded-full mr-3'></input>
                        </div>
                        <div>
                            <label>Security alerts</label>
                        </div>
                    </div>
                </div>

            </div>
            <button className='bg-purple-700 text-sm mt-5 text-white px-5 py-3 rounded-lg shadow-md shadow-purple-300 dark:shadow-gray-900' type='submit'>Save Changes</button>
        </>
    )
}