import {connect} from "react-redux";
import {compose} from "redux";
import classes from './SettingWrapper.module.css'
import SettingForm from "./SettingForm";
import {getProfile} from "../../redux/selectors/profileSelector";
import {requestProfile, setProfileInfo} from "../../redux/profileReducer";
import {getAuthUserId} from "../../redux/selectors/authSelector";
import {useEffect, useState} from "react";
import Preloader from "../../common/Preloader/preloader";
import {withLoginRedirect} from "../../common/Redirect/RedirectLogin";


const SettingWrapper = (props) => {
    let [profile, setProfile] = useState(props.profile)
    useEffect(() => {
        props.requestProfile(props.userId)
        setProfile(props.profile)
    }, [profile])

    if(!props.profile) {
        return (
            <div className={classes.preloaderProfile}>
                <Preloader />
            </div>
        )
    }

    return (
        <SettingForm profile={props.profile}
                     userId={props.userId}
                     requestProfile={props.requestProfile}
                     setProfileInfo={props.setProfileInfo}
                     className={classes.settingForm}
        />
    )
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    userId: getAuthUserId(state)
})

const actionCreators = {
    requestProfile,
    setProfileInfo,
}

export default compose(
    withLoginRedirect,
    connect(mapStateToProps, actionCreators)
)(SettingWrapper)
