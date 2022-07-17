import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../media/loder2.png'
import { motion, AnimatePresence } from "framer-motion"; //check note.txt for notes on framer motion

import dashboard from '../../media/dashboard.png'

import service1 from '../../media/services1.svg'
import service2 from '../../media/services2.svg'
import service3 from '../../media/services3.svg'
import about from '../../media/about1.png'
import about2 from '../../media/3d.png'


export const HomePage = () => {

    const [nav, setNav] = useState(true);

    const toggleNav = () => {
        setNav(!nav)
    }


    return (
        <>

            <div className="hero-section">

                {/* Navbar */}
                <header className="px-3.5 md:px-6 lg:px-20 2xl:px-40 shadow-lg lg:shadow-none">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-3 items-center'>
                                <img alt='logo' src={Logo} className="w-4/12 md:w-6/12 py-5" />
                                <p className='font-medium text-white text-xl'>Reqco</p>
                            </div>
                        </div>

                        <div className="hidden lg:flex gap-8 text-white font-medium text-lg items-center">
                            <div><NavLink to="#" onClick={toggleNav}>Home</NavLink></div>
                            <div><NavLink to="#" onClick={toggleNav}>Features</NavLink></div>
                            <div><NavLink to="#" onClick={toggleNav}>About</NavLink></div>
                            <div><NavLink to="#" onClick={toggleNav}>FAQ</NavLink></div>
                            <div><NavLink to="#" onClick={toggleNav}>Contact</NavLink></div>
                            <div><NavLink to="/login" className="bg-white bg-opacity-20 px-10 rounded-full py-3 hover:bg-opacity-100 hover:text-purple-700 hover:transition-all hover:animate-pulse hover:bg-right"> Login </NavLink></div>
                        </div>

                        <div className="lg:hidden">
                            {
                                nav && (
                                    <motion.div
                                        animate={{ y: [0, 50], scale: 1 }}
                                        exit={{ y: [50, 0] }}
                                        transition={{ type: "twin", ease: "easeInOut" }}
                                        className=" space-y-4 bg-white   py-7  text-lg items-center absolute top-10  w-11/12 mx-5 px-8 left-0">
                                        <div><NavLink to="/home">Home</NavLink></div>
                                        <div><NavLink to="/home">Features</NavLink></div>
                                        <div><NavLink to="/home">About</NavLink></div>
                                        <div><NavLink to="/home">FAQ</NavLink></div>
                                        <div><NavLink to="/home">Contact</NavLink></div>
                                    </motion.div>
                                )
                            }
                        </div>

                        <div className="lg:hidden">
                            <button onClick={toggleNav} className="text-white focus:border-2 p-1 rounded-lg lg:hidden  focus:shadow-outline-purple">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </header>

                {/* main hero */}

                <div className="px-4 text-center mt-16 lg:mt-32 2xl:mt-36">
                    <div className="text-white xl:w-6/12 2xl:w-5/12 mx-auto space-y-6">
                        <motion.h2
                            animate={{ scale: [1, .5, 1] }}
                            transition={{ type: "twin", ease: "easeInOut", duration: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white">Stay Connected together within your business network </motion.h2>

                        <p className="px-2.5 text-lg md:text-xl lg:px-10">Personalized experiences are proven to increase conversions. Reqco makes it easy. Let's make the internet delightfully human.</p>
                        <div className="pt-6">
                            <NavLink to="/sign-up" className="bg-white font-medium text-purple-600 px-20 py-5 rounded-full text-base hover:bg-right hover:bg-transparent hover:border-2 hover:border-white  hover:text-white">Get Started Now</NavLink>
                        </div>
                    </div>

                    <img src={dashboard} alt="" className="Lazyload mt-28 md:mt-20 mx-auto" />
                </div>

            </div>


            <div className="px-4 text-center mt-12 lg:mt-20 2xl:mt-32">
                <div className="md:w-3/4 xl:w-6/12 2xl:w-6/12 mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-medium">Finally focus on my marketing strategy and delegate </h2>

                    <p className="px-2.5 text-lg md:text-xl lg:px-10">In the old days, your website was the same for everyone. Not anymore. Experiences lets you adapt your website for every audience.</p>
                </div>

                <div className="md:w-11/12 xl:w-3/4 mx-auto mt-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20 justify-center ">
                        <div className="py-8 px-5 bg-slate-50 hover:bg-white hover:shadow-xl border space-y-4 cursor-pointer rounded-lg">
                            <img src={service1} alt="" className="lazyload bg-white rounded-full p-4" />
                            <p className="text-left font-semibold text-2xl">Design & Creativity</p>
                            <p className="text-left text-base lg:text-lg">Working with Growmodo allows you to scale your marketing and grow faster without becoming a designer or developer yourself.</p>
                        </div>

                        <div className="py-8 px-5 bg-slate-50 hover:bg-white hover:shadow-xl border space-y-4 cursor-pointer rounded-lg">
                            <img src={service2} alt="" className="lazyload bg-white rounded-full p-4" />
                            <p className="text-left font-semibold text-2xl">Design & Creativity</p>
                            <p className="text-left text-base lg:text-lg">Working with Growmodo allows you to scale your marketing and grow faster without becoming a designer or developer yourself.</p>
                        </div>

                        <div className="py-8 px-5 bg-slate-50 hover:bg-white hover:shadow-xl border space-y-4 cursor-pointer rounded-lg justify-self-center mx-auto">
                            <img src={service3} alt="" className="lazyload bg-white rounded-full p-4" />
                            <p className="text-left font-semibold text-2xl">Design & Creativity</p>
                            <p className="text-left text-base lg:text-lg">Working with Growmodo allows you to scale your marketing and grow faster without becoming a designer or developer yourself.</p>
                        </div>

                    </div>
                </div>
            </div>

            <section className="">
                <div className="px-5">
                    <div className="lg:flex md:w-11/12 xl:w-3/4 mx-auto mt-20 2xl:mt-32 gap-20 items-center">
                        <div className="lg:w-1/2">
                            <div className="about-img ">
                                <img src={about} alt="" />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="about-caption space-y-8">
                                <div className="about-icon">
                                    <img src={about2} alt="" className="lazyload w-20 bg-purple-600 rounded-full p-4" />
                                </div>

                                <div className="">
                                    <h2 className="font-medium text-4xl md:text-5xl lg:text-4xl xl:text-5xl md:w-3/4">Personalized experiences are proven to increase conversions</h2>
                                </div>
                                <p className="text-lg">
                                    What if you could get all your website tasks off your plate and focus only on the fun stuff? Working with Growmodo allows you to scale your marketing and grow faster without becoming a designer or developer yourself.
                                </p>
                                <div className="pt-6">
                                    <NavLink to="/sign-up" className="bg-purple-600 font-medium text-white px-20 py-5 rounded-full text-base hover:bg-right hover:bg-transparent hover:border-2 hover:border-purple-600  hover:text-purple-600">See How it Works</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="mt-24">
                <div className="lg:w-3/4 section-2 h-full object-cover py-24 rounded-t-full lg:rounded-t-2xl xl:rounded-t-full mx-auto ">
                    <div className="text-white text-center mx-auto space-y-6">
                        <motion.h2
                            animate={{ scale: [1, .5, 1] }}
                            transition={{ type: "twin", ease: "easeInOut", duration: 0.5 }}
                            className="w-10/12 md:w-8/12 lg:w-full mx-auto text-4xl md:text-5xl font-medium text-white">Start getting your errand done
                        </motion.h2>

                        <p className="px-2.5 text-lg md:text-xl lg:px-10">The automated process starts as soon as your regquest is created.</p>
                        <div className="pt-6">
                            <NavLink to="/sign-up" className="bg-white font-medium text-purple-600 px-20 py-5 rounded-full text-base hover:bg-right hover:bg-transparent hover:border-2 hover:border-white  hover:text-white">Get Started Now</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-800 py-14">
                <div className="mx-auto w-11/12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 items-start px-3.5">
                        <div className="">
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-3 items-center'>
                                    <img alt='logo' src={Logo} className="w-4/12 md:w-6/12 py-5" />
                                    <p className='font-medium text-white text-xl'>Reqco</p>
                                </div>
                            </div>
                            <p className="text-lg text-slate-400">The automated process starts as soon as your regquest is created.</p>
                        </div>

                        <div className=" space-y-4">
                            <h2 className="text-white font-medium text-2xl">Our Solutions</h2>
                            <div className="text-lg text-slate-400 space-y-4">
                                <p>Design & creatives</p>
                                <p>Telecommunication</p>
                                <p>Restaurant</p>
                                <p>Programming</p>
                                <p>Architecture</p>
                            </div>
                        </div>


                        <div className=" space-y-4">
                            <h2 className="text-white font-medium text-2xl">Company</h2>
                            <div className="text-lg text-slate-400 space-y-4">
                                <p>Design & creatives</p>
                                <p>Telecommunication</p>
                                <p>Restaurant</p>
                                <p>Programming</p>
                                <p>Architecture</p>
                            </div>
                        </div>

                        <div className=" space-y-4">
                            <h2 className="text-white font-medium text-2xl">Contact</h2>
                            <div className="text-lg text-slate-400 space-y-4">
                                <p>aoluwasegun009@gmail.com</p>
                                <p>+2348101560887</p>
                                <p>AIT Road, Alagbado, Lagos State</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}