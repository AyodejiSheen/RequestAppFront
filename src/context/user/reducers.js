import {
    //import all the actions for user context api

    LOGIN,
    SIGN_UP,
    SIGN_OUT,
    AUTH,
    AUTH_ERROR,
    EDIT_USER

} from './actions'




const UserReducers = (state, action) => {

    //to set state based on the action type
    switch (action.type) {

        case SIGN_UP:
            return {
                ...state,
                usersArr: [...state.usersArr, action.payload.user],
            }

        case LOGIN:
            let res = action.payload;
            return {
                ...state,
                token: res.token,
                authState: true,
                userId: res.user.id,
                user: res.user,
            }

        case SIGN_OUT:
            return {
                ...state,
                user: null,
                userId: null,
                token: null,
                authState: false
            }

        case AUTH:
            let authRes = action.payload;
            return {
                ...state,
                authState: true,
                user: authRes,
                userId: authRes.id,
            }

        case AUTH_ERROR:
            return {
                ...state,
                authState: false
            }

        case EDIT_USER:
            return{
                ...state,
                user:{...state.user, 
                    firstname:action.payload.firstname,
                    lastname:action.payload.lastname,
                    email:action.payload.email,
                    phone:action.payload.phone,
                    about:action.payload.about
                }
            }





        default:
            return state;
    }


}


export default UserReducers;