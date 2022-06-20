import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UIContext from '../context/UI/context'
import img from '../media/not-found.svg'



export const Errorpage = () => {

    let { isDark } = useContext(UIContext)

    return (
        <>

            <div className={isDark ? "dark" : "''"}>
                <div className="my-6 px-6 text-center">
                    <section className="flex flex-col items-center justify-center">
                        <h1 className='my-2.5 text-8xl md:text-9xl font-bold text-blue-700'>404</h1>
                        <h2 className='my-2.5 font-semibold text-blue-900 text-xl md:text-2xl lg:text-3xl'>The page you are looking for doesn't exist.</h2>
                        <Link className="my-2.5 bg-gray-800 text-white px-6 py-3 md:py-2.5 lg:py-3 rounded-lg" to="/">Back to home</Link>
                        <img src={img} className="md:w-3/5 lg:w-2/5 py-5" alt="Page Not Found"/>
                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">Ayodeji</a>
                            </div>
                    </section>

                </div>
            </div>

        </>
    )
}