import {authAPI} from "../API/api";

const SET_USER_LOGIN = "authReducer/SET_USER_LOGIN";

let initionalState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initionalState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN: {
            return {
                ...state,
                ...action.data,
            };
        }

        default:
            return state;
    }
}

const setUserLogin = (userId, login, email, isAuth) => ({type: SET_USER_LOGIN, data: {userId, login, email, isAuth}})

export const authMe = (isAuth) => async (dispatch) => {
    let response = await authAPI.authMe()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setUserLogin(id, login, email, true))
    }
}


export const login = (loginData, setError) => async (dispatch) => {
    let response = await authAPI.login(loginData)

    if (response.data.resultCode === 0) {
        dispatch(authMe(true))
    } else {
        setError({error: response.data.messages})
    }
}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserLogin(null, null, null, false))
    }
}


export default authReducer;