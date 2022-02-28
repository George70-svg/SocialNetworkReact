import classes from './Profile.module.css'
import UserProfile from "./UserProfile/UserProfile";
import MyPostsWrapper from "./MyPosts/MyPostsWrapper";


const Profile = (props) => {
    return (
        <div>
            <div className={classes.profileHeader}>

            </div>

            <div className={classes.foneImage}>
                <img src="https://sun9-43.userapi.com/c855720/v855720525/16237c/NwRbdoz_yr4.jpg" alt="page fon"/>
            </div>

            <UserProfile className={classes.userProfile}
                         profile={props.profile}
                         status={props.status}
                         commonAvatar={props.commonAvatar}
                         isOwner={props.isOwner}
                         updateProfileStatus={props.updateProfileStatus}
                         setProfileAvatar={props.setProfileAvatar}
            />
            <MyPostsWrapper/>
        </div>
    )
}

export default Profile;