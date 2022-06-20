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
                usersArr: [...state.usersArr, action.payload.user],
            }

        case LOGIN:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.user.id,
                usersArr: [...state.usersArr, action.payload.user],
            }





        default:
            return state;
    }


}


export default UserReducers;