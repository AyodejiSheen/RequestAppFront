import {
    MAKE_REQUEST,
    GET_REQUESTS,
    VIEW_REQUEST,
    ACCEPT_REQ
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

        case VIEW_REQUEST:
            return{
                ...state,
                request:action.payload,
                isReqLoading:true
            }

        case ACCEPT_REQ:
            return{
                ...state,
                request : {...state.request, status:"Approved"}
            }


        default:
            return state;
    }

}


export default RequestReducer;