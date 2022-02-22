import {usersAPI} from "../API/api";

const SET_TOTAL_USERS_COUNT = "friendsReducer/SET_TOTAL_USERS_COUNT"

let initionalState = {
    totalUsersCount: null,
    friendsList: [
        {
            id: "1",
            avatar: "https://pbs.twimg.com/media/Dz2w7QfX4AASPzL.jpg",
            name: "Яна"
        },

        {
            id: "3",
            avatar: "https://pbs.twimg.com/profile_images/1260892940165165056/DbnIwfQn_400x400.jpg",
            name: "Вова"
        },

        {
            id: "4",
            avatar: "https://img.nickpic.host/3kthMb.md.jpg",
            name: "Роман"
        },

        {
            id: "5",
            avatar: "https://i.pinimg.com/originals/8b/b1/e6/8bb1e6f277f5325cdf4bb7c24a7414c4.jpg",
            name: "Мария"
        },

        {
            id: "6",
            avatar: "https://i01.fotocdn.net/s122/e7191cad2f5d6b50/user_l/2796060407.jpg",
            name: "Софи"
        },

        {
            id: "7",
            avatar: "https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png",
            name: "Максим"
        },
    ]
};

const friendsReducer = (state = initionalState, action) => {
    switch (action.type) {
        case SET_TOTAL_USERS_COUNT: {
            return ({
                ...state,
                totalUsersCount: action.totalCount
            })
        }

        default:
            return state
    }
}

const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})

export const getTotalCountUsers = () => async (dispatch) => {
    let response = await usersAPI.totalUsers()
    dispatch(setTotalUsersCount(response))
}


export default friendsReducer;