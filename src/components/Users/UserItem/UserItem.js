import classes from "./UsersItem.module.css";
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    let standardBackground = "https://img1.goodfon.ru/original/800x480/5/5b/bull-nebula-sozvezdie-telca.jpg"
    let standardAvatar = "https://yt3.ggpht.com/a/AATXAJzbXlyAISaTM-VcH2IqMMLvZTgfVeLsIA_AdvPK=s900-c-k-c0xffffffff-no-rj-mo"

    return (
        <div className={classes.userContainer}>
            <div className={classes.backgroundImg}>
                <img src={(props.backgroundImg)
                    ? props.backgroundImg
                    : standardBackground}
                     alt="background"/>
            </div>
            <NavLink className={classes.userInfo} to={`profile/${props.userId}`}>
                <div className={classes.avatarContainer}>
                    <img src={(props.photos)
                        ? props.photos
                        : standardAvatar}
                         alt="avatar"/>
                </div>
                <div className={classes.fullName}>
                    <p>{props.name}</p>
                    <p>{props.userId}</p>
                </div>
                <div className={classes.location}>
                    <p>{(props.country) ? props.country : 'unknown'}</p>
                    <p>{(props.city) ? props.city : 'unknown'}</p>
                </div>
                <div className={classes.status}>
                    {(props.status) ? props.status : 'Whoops!'}
                </div>
            </NavLink>
            <div className={classes.subscribeContainer}>
                {props.subscription ? <button disabled={props.followingInProgress.some(id => id === props.userId)}
                        onClick={() => {props.unfollow(props.userId)}}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === props.userId)}
                        onClick={() => {props.follow(props.userId)}}>Follow</button>
                }
            </div>
        </div>
    )
}

export default UserItem