import {usersAPI} from "../API/api";

const FOLLOW = "usersReducer/FOLLOW";
const UNFOLLOW = "usersReducer/UNFOLLOW";
const SET_USERS = "usersReducer/SET_USERS";
const SET_PRELOADER = "usersReducer/SET_PRELOADER";
const SET_TOTAL_USERS_COUNT = "usersReducer/SET_TOTAL_USERS_COUNT";
const FOLLOWING_IN_PROGRESS = "usersReducer/FOLLOWING_IN_PROGRESS";

let initionalState = {
    usersData: [],
    pageSize: 12,
    pageNumber: 1,
    pageCount: null,
    toggleIsFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initionalState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, usersData: state.usersData.map(
                    users => {
                        if (users.id === action.id) {
                            return {
                                ...users,
                                followed: true,
                            }
                        }
                        return users
                    }),
            }
        }

        case UNFOLLOW: {
            return {
                ...state, usersData: state.usersData.map(
                    users => {
                        if (users.id === action.id) {
                            return {
                                ...users,
                                followed: false,
                            }
                        }
                        return users
                    }
                )
            }
        }

        case SET_USERS: {
            return (
                {...state, usersData: [...action.usersList], pageNumber: action.pageNumber}
            )
        }

        case SET_PRELOADER: {
            return (
                {
                    ...state,
                    toggleIsFetching: action.preloaderState
                }
            )
        }

        case SET_TOTAL_USERS_COUNT: {
            return (
                {
                    ...state,
                    pageCount: action.counter
                }
            )
        }

        case FOLLOWING_IN_PROGRESS: {
            return (
                {
                    ...state,
                    followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
                }
            )
        }

        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, id: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, id: userId});
export const setUsers = (users, pageNumber) => ({type: SET_USERS, usersList: users, pageNumber});
export const setTotalUsersCount = (counter) => ({type: SET_TOTAL_USERS_COUNT, counter});
export const toggleIsFetching = (preloaderState) => ({type: SET_PRELOADER, preloaderState})
export const followingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items, currentPage))
    dispatch(setTotalUsersCount(response.totalCount))
}


export const subscribeToUser = (userId) => async (dispatch) => {
    dispatch(followingInProgress(true, userId))
    await usersAPI.follow(userId)
    dispatch(followingInProgress(false, userId))
    dispatch(follow(userId))
}


export const unsubscribeToUser = (userId) => async (dispatch) => {
    dispatch(followingInProgress(true, userId))
    await usersAPI.unfollow(userId)
    dispatch(followingInProgress(false, userId))
    dispatch(unfollow(userId))
}

export default usersReducer;