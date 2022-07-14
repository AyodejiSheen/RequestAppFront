import React from 'react';
import { MainSkeleton } from './MainSkeleton';
import { Shimmer } from './shimmer';






export const ReqSkeleton = (props) => {

    let { theme } = props;
    const themeClass = theme || 'light'


    return (
        <>
            <div className={`skeleton-wrapper ${themeClass} rounded-lg dark:bg-gray-700 bg-white`}>
                <div className='skeleton-request p-5 space-y-5'>
                    <div className='flex flex-wrap  justify-between items-center'>
                        <div className='flex flex-wrap gap-6 items-center'>
                            <div className='w-14 h-14 rounded-full dark:bg-gray-700 bg-neutral-100'></div>
                            <div className=' w-44 h-8 dark:bg-gray-700 bg-neutral-100 rounded-lg'></div>
                        </div>

                        <div>
                            <div className='w-20 h-8 dark:bg-gray-700 bg-neutral-100 rounded-lg'></div>
                        </div>
                    </div>

                    <div className='space-y-2.5'>
                        <div className=' w-44 h-8 dark:bg-gray-700 bg-neutral-100 rounded-lg'></div>
                        <div className=' w-full h-6 dark:bg-gray-700 bg-neutral-100 rounded'></div>
                    </div>

                    <div className='space-y-2.5'>
                        <div className=' w-44 h-8 dark:bg-gray-700 bg-neutral-100 rounded-lg'></div>
                        <div className=' w-full h-6 dark:bg-gray-700 bg-neutral-100 rounded'></div>
                    </div>
                </div>
                <Shimmer />
            </div>
        </>
    )
}