import axios from "axios"
import baseUrl from "../../baseUrl"
import UIContext from "../UI/context";
import React, { useContext, useReducer } from 'react'
import RequestReducer from "./reducers";
import RequestContext from "./context";

import {
    MAKE_REQUEST,
    GET_REQUESTS,
    VIEW_REQUEST,
    ACCEPT_REQ
} from './actions'

import UserContext from "../user/context";





const RequestState = (props) => {

    let { setAlert } = useContext(UIContext);
    let { user } = useContext(UserContext);



    const initialState = {
        allRequests: null,
        isLoading: false,
        isReqLoading: false,
        request: null,
    }


    const [state, dispatch] = useReducer(RequestReducer, initialState)


    const MakeRequests = async (data) => {
        let token = localStorage.getItem("JWTR");
        data = {
            ...data,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            UserId: user.id
        }
        await axios.post(`${baseUrl.baseUrl}/request`, data, {
            headers: { accessToken: token }
        }).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
            } else {
                let res = {
                    altType: "success",
                    altMsg: "Your Request is Created!"
                }
                setAlert(res)
            }
        }).catch((err) => {
            let res = {
                altType: "danger",
                altMsg: "Server Error"
            }
            setAlert(res)
        })
    }


    const getRequests = async () => {
        let token = localStorage.getItem("JWTR");
        await axios.get(`${baseUrl.baseUrl}/request`, {
            headers: { accessToken: token }
        }).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
            } else {
                dispatch({
                    type: GET_REQUESTS,
                    payload: response.data
                });

            }
        }).catch((err) => {
            let res = {
                altType: "danger",
                altMsg: "Server Error"
            }
            setAlert(res)
        })
    }


    const ViewRequest = async (data) => {
        let token = localStorage.getItem("JWTR");
        await axios.get(`${baseUrl.baseUrl}/request/view/${data}`, {
            headers: { accessToken: token }
        }).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
            } else {
                dispatch({
                    type: VIEW_REQUEST,
                    payload: response.data
                });
            }
        }).catch((err) => {
            let res = {
                altType: "danger",
                altMsg: "Server Error"
            }
            setAlert(res)
        })
    }


    const acceptReq = async (data) => {
        let token = localStorage.getItem('JWTR')
        await axios.put(`${baseUrl.baseUrl}/request/accept-request`, data, {
            headers: { accessToken: token }
        }).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
            } else {
                dispatch({
                    type: ACCEPT_REQ
                });

                axios.post(`${baseUrl.baseUrl}/notify`, data, {
                    headers: { accessToken: token }
                }).then((response) => {
                    if (response.data.error) {
                        let res = {
                            altType: "danger",
                            altMsg: response.data.error
                        }
                        setAlert(res)
                    } else {
                        console.log(response.data)
                    }
                }).catch((err) => {
                    let res = {
                        altType: "danger",
                        altMsg: "Server Error"
                    }
                    setAlert(res)
                })

                setTimeout(() => {
                    axios.post(`${baseUrl.baseUrl}/notify/accepter`, data, {
                        headers: { accessToken: token }
                    }).then((response) => {
                        if (response.data.error) {
                            let res = {
                                altType: "danger",
                                altMsg: response.data.error
                            }
                            setAlert(res)
                        } else {
                            console.log(response.data)
                        }
                    }).catch((err) => {
                        let res = {
                            altType: "danger",
                            altMsg: "Server Error"
                        }
                        setAlert(res)
                    })
                }, 1000)


                let res = {
                    altType: "success",
                    altMsg: "Your Accepted This Request!"
                }
                setAlert(res);
            }
        }).catch((err) => {
            let res = {
                altType: "danger",
                altMsg: "Server Error"
            }
            setAlert(res)
        })
    }




    return (
        <RequestContext.Provider value={{
            MakeRequests,
            getRequests,
            ViewRequest,
            acceptReq,
            allRequests: state.allRequests,
            isLoading: state.isLoading,
            request: state.request,
            isReqLoading: state.isReqLoading,
        }}>
            {props.children}
        </RequestContext.Provider>
    )


}


export default RequestState;