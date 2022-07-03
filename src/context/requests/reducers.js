import {
    MAKE_REQUEST,
    GET_REQUESTS
} from './actions'





const RequestReducer = (state, action) => {

    switch (action.type) {

        case MAKE_REQUEST:
            return{
                // ...state,
                // allRequests:[...state.allRequests, action.payload]
            }

        case GET_REQUESTS:
            return {
                ...state,
                allRequests: action.payload,
                isLoading: true
            }



        default:
            return state;
    }

}


export default RequestReducer;