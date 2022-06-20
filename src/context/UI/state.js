import { useReducer } from "react";
import UIReducers from "./reducers";
import UIContext from "./context";


import {
    MOBILE_NAVBAR,
    SWITCH_THEME,
    TOGGLE_NAV,
    SET_ALERT,
    REMOVE_ALERT
}

    from "./actions";





const UIState = (props) => {

    //initialstates for ui
    const initialState = {
        isDark: false,
        mobileNav: false,
        alert:{showAlert:false, msg:null, type:null}
    }

    let [state, dispatch] = useReducer(UIReducers, initialState);


    //functions for ui

    //to toggle theme
    const switchTheme = () => {
        dispatch({
            type: SWITCH_THEME
        })

        console.log(state.isDark)
    }


    //to toggle Navbar
    const toggleNav = (data) => {
        dispatch({
            type:TOGGLE_NAV,
            payload:data
        })
    }


    //to set alert
    const setAlert = (data) => {
        dispatch({
            type:SET_ALERT,
            payload:data
        })

        setTimeout(() => dispatch({
            type: REMOVE_ALERT,
        }), 3000)

    }



    return (
        <UIContext.Provider value={{
            isDark: state.isDark,
            mobileNav: state.mobileNav,
            alert:state.alert,
            setAlert,
            switchTheme,
            toggleNav

        }} >

            {props.children}
            
        </UIContext.Provider>
    )

}


export default UIState;