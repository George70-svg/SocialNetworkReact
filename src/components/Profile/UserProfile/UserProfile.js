import classes from "./UserProfile.module.css";
import Preloader from "../../../common/Preloader/preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

const UserProfile = (props) => {
    let commonAvatar = "https://i08.fotocdn.net/s123/1a152e8b84fe2ebe/user_l/2811351276.jpg"

    if(!props.profile) {
        return (
            <div className={classes.preloaderProfile}>
                <Preloader />
            </div>
        )
    }

    return(
        <div className={classes.avatar}>
            <img src={props.profile.photos.small ? props.profile.photos.small : commonAvatar} alt="avatar"/>
            <div className={classes.userInfo}>
                <div className={classes.name}>Имя: {props.profile.fullName}</div>
                {/*<div className={classes.status}>Статус: {props.profile.aboutMe}</div>*/}
                <ProfileStatus status={props.status || "*-*-*-*"} updateProfileStatus={props.updateProfileStatus}/>
                <div className={classes.vkontakte}>Вконтакте: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>
            </div>
        </div>
    )
}

export default UserProfile;
