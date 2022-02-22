import {profileAPI} from "../API/api";

const ADD_POST = "profileReducer/ADD-POST";
const DELETE_POST = "profileReducer/DELETE_POST";
const SET_PROFILE = "profileReducer/SET_PROFILE"
const SET_STATUS = "profileReducer/SET_STATUS";

let initionalState = {
    postsData: [
        {
            id: 1,
            text: "Hi, how are you?",
            likesCount: 15,
            avatar: "https://i08.fotocdn.net/s123/1a152e8b84fe2ebe/user_l/2811351276.jpg"
        },
        {
            id: 2,
            text: "it's my first post",
            likesCount: 20,
            avatar: "https://pbs.twimg.com/media/Dz2w7QfX4AASPzL.jpg"
        },
        {
            id: 3,
            text: "it's awesome",
            likesCount: 2,
            avatar: "https://uprostim.com/wp-content/uploads/2021/03/image018-95.jpg"
        },
    ],

    profile: null,
    status: "",
    nextId: 3,
};

const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {
                ...state,
                postsData: [...state.postsData],
                nextId: state.nextId + 1,
            };

            let postText = action.postText;

            if (postText === '' || postText === undefined || postText === null) return state;

            let newPost = {
                id: state.nextId + 1,
                text: postText,
                likesCount: 0,
                avatar: "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/4f9d_6636722113216577541.jpg"
            }

            stateCopy.postsData.unshift(newPost);
            return stateCopy;
        }

        case DELETE_POST: {
            return {...state, postsData: state.postsData.filter(item => item.id !== action.postId)}
        }

        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profileInfo
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

export const setProfile = (profileInfo) => ({type: SET_PROFILE, profileInfo});
export const addPost = (postText) => ({type: ADD_POST, postText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setProfileStatus = (status) => ({type: SET_STATUS, status});

export const requestProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response))
}


export const updateProfileStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateProfileStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}


export const setUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.setProfileStatus(userId)
    dispatch(setProfileStatus(response.data))
}


export default profileReducer;