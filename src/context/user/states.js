import React, { useContext, useReducer } from 'react';
import UserReducers from './reducers';
import UserContext from './context';
import baseUrl from '../../baseUrl';
import axios from "axios";
import UIContext from '../UI/context';
import { useNavigate } from 'react-router-dom';

//to check if JWT expired
import { isJwtExpired } from 'jwt-check-expiration'




import {
    //import all the actions for user context api

    LOGIN,
    SIGN_OUT,
    SIGN_UP,
    AUTH_ERROR,
    AUTH,
    EDIT_USER

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
        await axios.post(`${baseUrl.baseUrl}/user`, data).then((response) => {
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
                }, 1000)
            }
        }).catch((err) => {
            console.log(err);
        });
    }




    //to Login
    const login = async (data) => {
        await axios.post(`${baseUrl.baseUrl}/user/login`, data).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
            } else {
                localStorage.setItem("JWTR", response.data.token);
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
                altMsg: "Server Error"
            }
            setAlert(res)
        });
    }




    //to logout user
    const logout = async () => {
        localStorage.removeItem("JWTR")
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



    // to handle authentication
    const handleAuth = async () => {
        let token = localStorage.getItem('JWTR')
        if (token) {
            let check = isJwtExpired(token);
            if (!check) {
                await axios.get(`${baseUrl.baseUrl}/user/auth`, {
                    headers: {
                        accessToken: token,
                    },
                }).then((response) => {
                    if (response.data.error) {
                        dispatch({
                            type: AUTH_ERROR
                        })
                        let res = {
                            altType: "danger",
                            altMsg: response.data.error
                        }
                        setAlert(res)
                        navigate('/')
                    } else {
                        dispatch({
                            type: AUTH,
                            payload: response.data
                        })
                    }
                }).catch((err) => {
                    console.log(err);
                    let res = {
                        altType: "danger",
                        altMsg: "Server Error"
                    }
                    setAlert(res)
                })
            } else {
                let res = {
                    altType: "danger",
                    altMsg: "Session Expired"
                }
                setAlert(res)
                navigate('/')
            }
        } else {
            navigate('/')
        }
    }



    //to edit profile
    const EditUserProfile = async (data) => {
        let token = localStorage.getItem('JWTR');
        await axios.put(`${baseUrl.baseUrl}/user/edit`, data, {
            headers: { accessToken: token, }
        }).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
            } else {
                dispatch({
                    type: EDIT_USER,
                    payload: data
                })
                let res = {
                    altType: "success",
                    altMsg: "profile Edited"
                }
                setAlert(res)
            }
        }).catch((err) => {
            console.log(err);
            let res = {
                altType: "danger",
                altMsg: "Server Error"
            }
            setAlert(res)
        })
    }


    //to change password
    const ChangePassword = async (data) => {
        let token = localStorage.getItem('JWTR');
        await axios.put(`${baseUrl.baseUrl}/user/changepassword`, data, {
            headers: { accessToken: token, }
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
                    altMsg: "Password Changed"
                }
                setAlert(res)
            }
        }).catch((err) => {
            console.log(err);
            let res = {
                altType: "danger",
                altMsg: "Server Error"
            }
            setAlert(res)
        })
    }



    // to reset password
    const resetLink = async (data) => {
        await axios.post(`${baseUrl.baseUrl}/user/resetlink`, { data }
        ).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
            } else {
                let res = {
                    altType: "success",
                    altMsg: response.data
                }
                setAlert(res)
            }

        }).catch((err) => {
            console.log(err);
            let res = {
                altType: "danger",
                altMsg: "Server Error"
            }
            setAlert(res)
        })
    }


    //to reset Password
    const verifyLink = async (data) => {
        let id = data.id;
        let token = data.token
        let check = isJwtExpired(token);
        if (!check) {
            axios.get(`${baseUrl.baseUrl}/user/verify-resetlink/${id}/${token}`)
                .then((response) => {
                    if (response.data.error) {
                        let res = {
                            altType: "danger",
                            altMsg: response.data.error
                        }
                        setAlert(res)
                        navigate('/')
                    } else {
                        let res = {
                            altType: "success",
                            altMsg: "Reset Your Password Now"
                        }
                        setAlert(res)
                    }
                }).catch((err) => {
                    console.log(err);
                    let res = {
                        altType: "danger",
                        altMsg: "Server Error"
                    }
                    setAlert(res)
                })
        } else {

            let res = {
                altType: "danger",
                altMsg: "Link has Expired"
            }
            setAlert(res)
            navigate('/')

        }
    }



    //to finally reset Password
    const resetPassword = async (data) => {
        let newPassword = data.newPassword;
        let id = data.id;
        await axios.put(`${baseUrl.baseUrl}/user/reset-password`, { newPassword, id }).then((response) => {
            if (response.data.error) {
                let res = {
                    altType: "danger",
                    altMsg: response.data.error
                }
                setAlert(res)
                navigate('/')
            } else {
                let res = {
                    altType: "success",
                    altMsg: "Password Resetted"
                }
                setAlert(res)
                navigate('/')
            }
        }).catch((err) => {
            console.log(err);
            let res = {
                altType: "danger",
                altMsg: "Server Error"
            }
            setAlert(res)
        })
    }



    return (
        <UserContext.Provider value={{
            signup,
            login,
            logout,
            handleAuth,
            EditUserProfile,
            ChangePassword,
            resetLink,
            verifyLink,
            resetPassword,
            user: state.user,
            isDark: state.isDark,
            userId: state.userId,
            authState: state.authState
        }}>
            {/* to make the fuctions and state availabe everywhere */}
            {props.children}
        </UserContext.Provider>
    )
}


export default UserState;