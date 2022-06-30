const { useReducer } = require("react")
const { default: RequestContext } = require("./context")
const { default: RequestReducer } = require("./reducers")








const RequestState = (props) => {

    const initalState = {

    }


    const [state, dispatch] = useReducer(RequestReducer, initalState)


    return(
        <RequestContext.Provider value={{
            
        }}>
            {props.children}
        </RequestContext.Provider>
    )


}


export default RequestState;