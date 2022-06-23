import React, { useContext, useReducer } from 'react';
import UserReducers from './reducers';
import UserContext from './context';
import baseUrl from '../../baseUrl';
import axios from "axios";
import UIContext from '../UI/context';
import { useNavigate } from 'react-router-dom';




import {
    //import all the actions for user context api

    LOGIN,
    SIGN_OUT,
    SIGN_UP,
    SIGN_UP_ERROR

} from './actions'




const UserState = (props) => {

    //write all function and all the states for users
    const initialState = {
        user: null,
        firstname: null,
        lastname: null,
        username: null,
        token: null,
        userId: null,
        authState: false
    };

    const [state, dispatch] = useReducer(UserReducers, initialState);

    let { setAlert } = useContext(UIContext)

    const navigate = useNavigate();





    //to register user
    //payload is what is sent to the function when its been called
    const signup = async (data) => {
        axios.post(`${baseUrl.baseUrl}/user`, data).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
            } else {
                setTimeout(() => {
                    let res = {
                        altType: "success",
                        altMsg: "You are Registered"
                    }
                    setAlert(res)
                    navigate('/')
                }, 2000)
            }
        }).catch((err) => {
            console.log(err);
        });
    }




    //to Login
    const login = async (data) => {
        axios.post(`${baseUrl.baseUrl}/user/login`, data).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
            } else {
                localStorage.setItem("JWT", response.data.token);
                dispatch({
                    type: LOGIN,
                    payload: response.data
                })
                setTimeout(() => {
                    let res = {
                        altType: "success",
                        altMsg: "You are Logged In"
                    }
                    setAlert(res)
                    navigate('/dashboard')
                }, 1000)
            }

        }).catch((err) => {
            console.log(err);
            let res = {
                altType: "danger",
                altMsg: err.message
            }
            setAlert(res)
        });
    }




    //to logout user
    const logout = () => {
        localStorage.removeItem("JWT")
        dispatch({
            type: SIGN_OUT
        });
        let res = {
            altType: "success",
            altMsg: "You are Logged Out"
        }
        setAlert(res)
        navigate('/');
    }





    //fetch request, user & dashboard data 
    const resources = () => {
    }






    return (
        <UserContext.Provider value={{
            signup,
            login,
            logout,
            resources,
            user: state.user,
            isDark: state.isDark,
            userId: state.userId
        }}>
            {/* to make the fuctions and state availabe everywhere */}
            {props.children}
        </UserContext.Provider>
    )
}


export default UserState;