import { useContext, useEffect, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom";
import RequestContext from "../../context/requests/context";
import UIContext from "../../context/UI/context";
import UserContext from "../../context/user/context";
import { Alert } from "../alert"
import { motion } from "framer-motion";





export const Dashboard = () => {

  let { authState, user } = useContext(UserContext)
  let { allRequests, getRequests, isLoading } = useContext(RequestContext)

  const [personalreq, setPersonalReq] = useState([]);
  const [accpreq, setaccpReq] = useState([]);
  const [pendreq, setpendReq] = useState([]);

  useEffect(() => {
    getRequests();

    if (isLoading) {

      setPersonalReq(allRequests.filter((each) => each.UserId === user.id));

    }

    if(personalreq.length >= 1){
      setaccpReq(personalreq.filter((each) => each.status === "Approved"))
      setpendReq(personalreq.filter((each) => each.status === "Pending"))

    }

  }, [authState, personalreq.length])

  return (

    <>
      <div className="container mx-auto pb-16">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Dashboard</h2>

        {/* CTA */}
        <NavLink className="flex items-center justify-between p-4  text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" to="https://github.com/estevanmaito/windmill-dashboard">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span>Star this project on GitHub</span>
          </div>
          <span>View more →</span>
        </NavLink>

        {
          isLoading ? <>
            {/* Dashboard Cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 py-14 border-b dark:border-gray-500">
              <div class="flex items-center p-4 bg-white border rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    All Your Requests
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {personalreq.length}
                  </p>
                </div>
              </div>

              <div class="flex items-center p-4 bg-white border rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total Accepted Requests
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {accpreq.length}
                  </p>
                </div>
              </div>

              <div class="flex items-center p-4 bg-white border rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Pending Requests
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {pendreq.length}
                  </p>
                </div>
              </div>

              <div class="flex items-center p-4 bg-white border rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Archived Requests
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    COMING SOON
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Latest Requests</h2>

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
            <div className="xl:grid xl:grid-cols-2 2xl:grid-cols-3 gap-x-16 gap-y-10 mt-8 space-y-8 xl:space-y-0">
              {
                allRequests.slice(0).reverse().map((each, i) => {
                  return (
                    <>
                      <div className="space-y-4">
                        <Link to={`requests/${each.id}`} key={each.id}>
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
                    </>
                  )
                })
              }

            </div>
          </> :
            <p>Dashboard Loading...</p>
        }

      </div>
    </>
  )
}