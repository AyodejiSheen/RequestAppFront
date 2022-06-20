import { 
    MOBILE_NAVBAR, 
    SWITCH_THEME,
    TOGGLE_NAV,
    SET_ALERT,
    REMOVE_ALERT
    } 

from "./actions";


const UIReducers = (state, action) => {

    switch(action.type){

        case SWITCH_THEME:
            return {
                ...state,
                isDark:!state.isDark
            }
        
        case TOGGLE_NAV:
            return{
                ...state,
                mobileNav: !state.mobileNav
            }

        case SET_ALERT:
            let res = action.payload;
            return{
                ...state,
                alert: {...alert, showAlert : true, msg : res.altMsg, type:res.altType },
            }

            case REMOVE_ALERT:
                return{
                    ...state,
                    alert: {...alert, showAlert : false, msg : null, type:null},
                }
            

        default:
            return state;
    }
}

export default UIReducers;