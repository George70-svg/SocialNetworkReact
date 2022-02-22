import {compose} from "redux";
import {connect} from "react-redux";
import UsersProfile from "./UsersProfile";
import {getUsers, subscribeToUser, unsubscribeToUser} from "../../redux/usersReducer";
import {
    getFollowingInProgress,
    getPageCount,
    getPageNumber,
    getPageSize,
    getToggleIsFetching,
    getUsersData
} from "../../redux/selectors/usersSelector";

let mapStateToProps = (state) => {
    return ({
        users: getUsersData(state),
        pageSize: getPageSize(state),
        currentPage: getPageNumber(state),
        pageCount: getPageCount(state),
        toggleIsFetching: getToggleIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    })
};

let actionsCreator = {
    getUsers,
    subscribeToUser,
    unsubscribeToUser
}

export default compose(
    //withLoginRedirect,
    connect(mapStateToProps, actionsCreator),
)(UsersProfile)