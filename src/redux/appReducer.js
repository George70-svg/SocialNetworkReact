import {authMe} from "./authReducer";

const INITIALIZATION_SUCCESS = "appReducer/INITIALIZATION_SUCCESS"

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }

        default:
            return state

    }
}

const initializationSuccess = () => ({type: INITIALIZATION_SUCCESS})

export const initialization = () => {
    return (dispatch) => {
        let promise = dispatch(authMe())

        Promise.all([promise])
            .then(() => {
                dispatch(initializationSuccess())
            })
    }
}