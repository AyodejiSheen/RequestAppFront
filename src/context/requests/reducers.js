import {
    MAKE_REQUEST
} from './actions'





const RequestReducer = (state, action) => {

    switch(action.type){
        case MAKE_REQUEST:{

        }

        default:
            return state;
    }

}


export default RequestReducer;