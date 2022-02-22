export const getUsersData = (state) => {
    return state.usersPage.usersData
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getPageNumber = (state) => {
    return state.usersPage.pageNumber
}

export const getPageCount = (state) => {
    return state.usersPage.pageCount
}

export const getToggleIsFetching = (state) => {
    return state.usersPage.toggleIsFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
