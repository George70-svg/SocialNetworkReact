import {profileAPI} from "../API/api";
import avatar1 from '../img/commonAvatar/4f9d_6636722113216577541.jpg'
import avatar2 from '../img/commonAvatar/3kthMb.md.jpg'
import avatar3 from '../img/commonAvatar/2796060407.jpg'

const ADD_POST = "profileReducer/ADD-POST";
const DELETE_POST = "profileReducer/DELETE_POST";
const SET_PROFILE = "profileReducer/SET_PROFILE"
const SET_STATUS = "profileReducer/SET_STATUS";
const SET_AVATAR = "profileReducer/SET_AVATAR";

let initionalState = {
    postsData: [
        {
            id: 1,
            text: "Hi, how are you?",
            likesCount: 15,
            avatar: avatar1
        },
        {
            id: 2,
            text: "it's my first post",
            likesCount: 20,
            avatar: avatar2
        },
        {
            id: 3,
            text: "it's awesome",
            likesCount: 2,
            avatar: avatar3
        },
    ],

    profile: null,
    status: "",
    nextId: 3,
    commonAvatar: avatar1,
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
                avatar: state.commonAvatar,
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

        case SET_AVATAR: {
            return {
                ...state,
                profile: {...state.profile, photos: action.img},
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
export const setAvatar = (img) => ({type: SET_AVATAR, img})

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

export const setProfileAvatar = (imgFile) => async (dispatch) => {
    let response = await profileAPI.setAvatar(imgFile)
    if (response.data.resultCode === 0) {
        dispatch(setAvatar(response.data.data.photos))
    }
}

export const setProfileInfo = (formData) => async (dispatch) => {
    let response = await profileAPI.setProfileInfo(formData)
}


export default profileReducer;