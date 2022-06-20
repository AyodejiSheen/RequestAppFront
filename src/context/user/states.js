import React, { useContext, useReducer } from 'react';
import UserReducers from './reducers';
import UserContext from './context';
import baseUrl from '../../baseUrl';
import axios from "axios";
import UIContext from '../UI/context';




import {
    //import all the actions for user context api

    LOGIN,
    SIGN_UP,
    SIGN_UP_ERROR

} from './actions'




const UserState = (props) => {

    //write all function and all the states for users
    const initialState = {
        usersArr: [],
        firstname: null,
        lastname: null,
        username: null,
        rstatus: null
    };

    const [state, dispatch] = useReducer(UserReducers, initialState);

    let { setAlert } = useContext(UIContext)












    //to register user
    //payload is what is sent to the function when its been called
    const signup = async (data) => {
         axios.post(`${baseUrl.baseUrl}/user`, data).then((response) => {
            if (response.data.error) {
                dispatch({
                    type: SIGN_UP_ERROR,
                })

            } else {

                dispatch({
                    type: SIGN_UP,
                    payload: data
                })
            }
        }).catch((err) => {
            console.log(err);
        });

        return state.rstatus;
    }







    return (
        <UserContext.Provider value={{
            signup,
            usersArr: state.usersArr,
            isDark: state.isDark,
            status: state.rstatus
        }}>
            {/* to make the fuctions and state availabe everywhere */}
            {props.children}
        </UserContext.Provider>
    )
}


export default UserState;