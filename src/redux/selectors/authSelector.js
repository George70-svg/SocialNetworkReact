export const getAuthUser = (state) => {
    return state.auth
}

export const getAuthStatus = (state) => {
    return state.auth.isAuth
}

export const getAuthUserId = (state) => {
    return state.auth.userId
}