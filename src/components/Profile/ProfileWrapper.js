import {connect} from "react-redux";
import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {requestProfile, setProfileAvatar, setUserStatus, updateProfileStatus} from "../../redux/profileReducer";
import {getCommonAvatar, getProfile, getStatus} from "../../redux/selectors/profileSelector";
import {getAuthStatus, getAuthUserId} from "../../redux/selectors/authSelector";
import {getInitialized} from "../../redux/selectors/appSelector";

class ProfileWrapper extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId)
        this.props.setUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     commonAvatar={this.props.commonAvatar}
                     updateProfileStatus={this.props.updateProfileStatus}
                     setProfileAvatar={this.props.setProfileAvatar}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    isAuth: getAuthStatus(state),
    authorizedUserId: getAuthUserId(state),
    initialized: getInitialized(state),
    commonAvatar: getCommonAvatar(state),
})

const actionCreators = {
    getProfile: requestProfile,
    updateProfileStatus,
    setUserStatus,
    setProfileAvatar,
}

export default compose(
    withRouter,
    connect(mapStateToProps, actionCreators),
)(ProfileWrapper)