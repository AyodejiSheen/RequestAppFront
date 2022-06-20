import {
    //import all the actions for user context api

    LOGIN,
    SIGN_UP,
    SIGN_UP_ERROR

} from './actions'




const UserReducers = (state, action) => {

    //to set state based on the action type
    switch (action.type) {

        case SIGN_UP:
            return {
                ...state, 
                usersArr: [...state.usersArr, action.payload],
                rstatus:true
            }

        case SIGN_UP_ERROR:
            return{
                ...state,
                rstatus:false
            }

        case LOGIN:
            return {
                ...state,
                usersArr: [...state.usersArr, action.payload]
            }





        default:
            return state;
    }


}


export default UserReducers;