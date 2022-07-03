import axios from "axios"
import baseUrl from "../../baseUrl"
import UIContext from "../UI/context";
import React, { useContext, useReducer } from 'react'
import RequestReducer from "./reducers";
import RequestContext from "./context";

import {
    MAKE_REQUEST,
    GET_REQUESTS
} from './actions'





const RequestState = (props) => {

    let { setAlert } = useContext(UIContext);


    const initialState = {
        allRequests : null,
        isLoading : false,
    }


    const [state, dispatch] = useReducer(RequestReducer, initialState)


    const MakeRequests = async (data) => {
        let token = localStorage.getItem("JWTR");
        console.log(data)
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
        axios.get(`${baseUrl.baseUrl}/request`, {
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
                console.log(state.isLoading)
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
            allRequests : state.allRequests,
            isLoading : state.isLoading
        }}>
            {props.children}
        </RequestContext.Provider>
    )


}


export default RequestState;