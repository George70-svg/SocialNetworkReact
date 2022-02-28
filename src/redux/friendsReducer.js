import {usersAPI} from "../API/api";
import avatar1 from '../img/commonAvatar/8bb1e6f277f5325cdf4bb7c24a7414c4.jpg'
import avatar2 from '../img/commonAvatar/3kthMb.md.jpg'
import avatar3 from '../img/commonAvatar/2796060407.jpg'
import avatar5 from '../img/commonAvatar/f769a2a14bda4462b1d3689647b508ea.png'
import avatar6 from '../img/commonAvatar/unnamed.jpg'
import avatar9 from '../img/commonAvatar/1636441921_10-papik-pro-p-milie-risunki-cheloveka-10.jpg'

const SET_TOTAL_USERS_COUNT = "friendsReducer/SET_TOTAL_USERS_COUNT"

let initionalState = {
    totalUsersCount: null,
    friendsList: [
        {
            id: "1",
            avatar: avatar9,
            name: "Яна"
        },

        {
            id: "3",
            avatar: avatar6,
            name: "Вова"
        },

        {
            id: "4",
            avatar: avatar2,
            name: "Роман"
        },

        {
            id: "5",
            avatar: avatar1,
            name: "Мария"
        },

        {
            id: "6",
            avatar: avatar3,
            name: "Софи"
        },

        {
            id: "7",
            avatar: avatar5,
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