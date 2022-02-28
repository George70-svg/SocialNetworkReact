import {authAPI, securityAPI} from "../API/api";

const SET_USER_LOGIN = "authReducer/SET_USER_LOGIN";
const SET_CAPTCHA_URL_SUCCESS = "authReducer/SET_CAPTCHA_URL_SUCCESS"

let initionalState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initionalState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN: {
            return {
                ...state,
                ...action.data,
            };
        }

        case SET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.captchaURL,
            };
        }

        default:
            return state;
    }
}

const setUserLogin = (userId, login, email, isAuth) => ({type: SET_USER_LOGIN, data: {userId, login, email, isAuth}})
const getCaptchaUrlSuccess = (captchaURL) => ({type: SET_CAPTCHA_URL_SUCCESS, captchaURL})

export const authMe = (isAuth) => async (dispatch) => {
    let response = await authAPI.authMe()
    if (response.resultCode === 0) {
        let {id, login, email, captcha} = response.data;
        dispatch(setUserLogin(id, login, email, true))
    }
}

export const login = (loginData, setError) => async (dispatch) => {
    let response = await authAPI.login(loginData)

    if (response.data.resultCode === 0) {
        dispatch(authMe(true))
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        } else {
            setError({error: response.data.messages})
        }
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserLogin(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaURL()
    dispatch(getCaptchaUrlSuccess(response.url))
}

export default authReducer;