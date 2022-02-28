import classes from "./UserProfile.module.css";
import Preloader from "../../../common/Preloader/preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import optionImg from "../../../img/icon/option.png"
import Contacts from "./Contacts/Contacts";

const UserProfile = (props) => {
    let commonAvatar = props.commonAvatar
    let optionImage = optionImg

    const changeAvatar = (event) => {
        if(event.target.files.length) {
            props.setProfileAvatar(event.target.files[0])
        }
    }

    if(!props.profile) {
        return (
            <div className={classes.preloaderProfile}>
                <Preloader />
            </div>
        )
    }

    return(
        <div className={classes.avatar}>
            {(props.isOwner) ?
                <div className={classes.optionsAvatar}>
                    <label htmlFor="inputFileAvatar"><img src={optionImage} alt="option"/></label>
                    <input type="file" id="inputFileAvatar" onChange={changeAvatar}/>
                </div> : null
            }

            <img src={props.profile.photos.large ? props.profile.photos.large : commonAvatar} alt="avatar"/>
            <div className={classes.userInfo}>
                <div className={classes.name}>Имя: {props.profile.fullName}</div>
                <ProfileStatus status={props.status || "*-*-*-*"} updateProfileStatus={props.updateProfileStatus}/>
                <div className={classes.aboutMe}>Обо мне: {props.profile.aboutMe}</div>
                <Contacts contacts={props.profile.contacts}/>
                <div className={classes.lookingForAJob}>Ищу работу: {props.profile.lookingForAJob ? 'Да' : 'Нет'}</div>
                <div className={classes.lookingForAJobDescription}>
                    Мои навыки: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Нет'}
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
