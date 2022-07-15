import React, { useState, useContext, useEffect } from 'react'
import RequestContext from '../../../context/requests/context'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate'
import UIContext from '../../../context/UI/context';
import { ReqSkeleton } from '../../../skeletons/reqSkeleton';








export const Requests = () => {


  let { getRequests, isLoading, allRequests } = useContext(RequestContext);

  let { isDark } = useContext(UIContext);



  const [displayRequest, setdisplayRequest] = useState();  //array to hold the slice requestsssss per page
  const [pageCount, setpageCount] = useState();

  //to setup pagination
  const [pageNumber, setPageNumber] = useState(0); /// to hold the current page number
  const RequestPerPage = 24;  //number of request to be showing per pages
  const pagesVisited = pageNumber * RequestPerPage;  // to accounted for all the pages visted and request showed

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  };

  let [skeleton, setSkeleton] = useState(false)






  useEffect(() => {

    getRequests();

    if (isLoading) {
      setpageCount(Math.ceil(allRequests.length / RequestPerPage))//ceil is  a math function in javascript to round up

      setTimeout(() => {
        setSkeleton(true)
        setdisplayRequest(
          allRequests
            .slice(pagesVisited, pagesVisited + RequestPerPage).reverse()
            .map((each) => {
              return (
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
                          <div className="relative w-8 h-8 mr-3 rounded-full">
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
              )
            }) //slice through the array from the total number of all the request show before to plus the addition of the request per page
          // then map the new array out
        )
      }, 2000)

    }

  }, [isLoading, pageNumber])



  return (
    <>

      <div className="container mx-auto pb-16 pt-2">

        {
          isLoading ?

            <>
              <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Requests</h2>

              {
                allRequests.length === 0 && (
                  <div className="text-center py-20">
                    <h2 className="mt-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">There is no request to display</h2>
                    <p className="mb-6">Be the first to upload a request by  clicking on the button below</p>
                    <Link to='/dashboard/create-a-request'
                      className="px-4 py-2 shadow-md shadow-purple-300 dark:shadow-gray-900 text-sm text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                    >
                      Make a Request
                    </Link>
                  </div>
                )
              }


              {/* Dashboard request cards */}
              <div className="xl:grid xl:grid-cols-2 2xl:grid-cols-3 gap-x-16 gap-y-10 mt-8 space-y-8 xl:space-y-0 mb-20">
                {
                  skeleton  || allRequests.length === 0 ? (
                    displayRequest
                  ) : (
                    [1, 2, 3, 4, 5, 6].map((n) => <ReqSkeleton key={n} theme={isDark ? "dark" : "light"} />)
                  )
                }
              </div>

              {
              allRequests.length !== 0 && (
                <ReactPaginate
                  previousLabel={"<<"}
                  nextLabel={">>"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              )
            }

            </> :
            (
              <motion.div
                animate={{ x: [-20, 20], y: [0, -10] }}
                transition={{ x: { yoyo: Infinity, duration: 0.5 }, y: { yoyo: Infinity, duration: 0.25, ease: 'easeInOut' } }}
                className="w-3 h-3 rounded-full bg-white mx-auto my-1.5"
              >

              </motion.div>
            )
        }
      </div>


    </>
  )
}