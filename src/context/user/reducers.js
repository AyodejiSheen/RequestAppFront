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
                notifications : res.message
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
                user: authRes.user,
                userId: authRes.user.id,
                notifications:authRes.message
            }

        case AUTH_ERROR:
            return {
                ...state,
                authState: false
            }

        case EDIT_USER:
            let resp = action.payload;
            return{
                ...state,
                token: resp.token,
                user: resp.user,
            }





        default:
            return state;
    }


}


export default UserReducers;