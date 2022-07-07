import React, { useContext, useEffect } from 'react'
import RequestContext from '../../../context/requests/context'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";








export const Requests = () => {


    let {getRequests, isLoading, allRequests} = useContext(RequestContext);



    useEffect(() => {
        getRequests();
    }, [])



    return (
        <>

<div className="container mx-auto pb-16 pt-2">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Requests</h2>

        {
            isLoading ? 
            
            <div className="xl:grid xl:grid-cols-2 2xl:grid-cols-3 gap-x-16 gap-y-10 mt-8 space-y-8 xl:space-y-0">
            {
              allRequests.slice(0).reverse().map((each, i) => {
                return (
                  <>
                    <div className="space-y-4">
                      <Link to={`${each.id}`} key={each.id}>
                        <motion.div
                          animate={{ scale: 1, opacity: 1 }}
                          initial={{ scale: 0, opacity: 0.2 }}
                          transition={{ duration: 0.5 }}
                          className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-3 cursor-pointer">
                          <div className="flex flex-wrap items-center text-sm justify-between">
                            <div className="flex items-center ">
                              {/* <!-- Avatar with inset shadow --> */}
                              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                              </div>
                              <div>
                                <p className="text-gray-600 dark:text-gray-400 font-semibold">{each.firstname + " " + each.lastname} </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{each.email}</p>
                              </div>
                            </div>
                            <div>
                              <span className={` ${each.status === "Pending" ? "px-2 py-1 text-xs leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600" : "px-2 py-1 text-xs leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"}`}>
                                {each.status}
                              </span>
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-gray-500">Request Title</label>
                            <p className="text-sm dark:text-white">{each.requestTitle}</p>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-gray-500">Request Body</label>
                            <p className="text-sm dark:text-white">{each.requestBody}</p>
                          </div>

                          <div className="text-right text-xs text-gray-500">
                            <p>Posted on {each.createdAt}</p>
                          </div>
                        </motion.div>
                      </Link>
                    </div>
                  </>
                )
              })
            }

          </div> :  
           <p>Requests Loading...</p>
        }
</div>


        </>
    )
}