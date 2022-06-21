import { useReducer } from "react";
import UIReducers from "./reducers";
import UIContext from "./context";


import {

    SWITCH_THEME,
    SET_ALERT,
    REMOVE_ALERT,

} from "./actions";







const UIState = (props) => {

    //initialstates for ui
    const initialState = {
        isDark: false,
        alert:{showAlert:false, msg:null, type:null}
    }

    let [state, dispatch] = useReducer(UIReducers, initialState);


    //functions for ui

    //to toggle theme
    const switchTheme = () => {
        dispatch({
            type: SWITCH_THEME
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
            alert:state.alert,
            setAlert,
            switchTheme,
        }} >

            {props.children}
            
        </UIContext.Provider>
    )

}


export default UIState;