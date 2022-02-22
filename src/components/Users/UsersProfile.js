import React, {useEffect, Profiler} from 'react';
import classes from "./Users.module.css"
import UserItem from "./UserItem/UserItem";
import Preloader from "../../common/Preloader/preloader";
import Paginator from "./Paginator/Paginator";

const UsersProfile = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [])

    if(props.toggleIsFetching) {
        return (
            <div className={classes.preloader}>
                <Preloader/>
            </div>
        )
    }

    let usersArray = props.users.map((item) => <UserItem
        key={item.id}
        userId={item.id}
        name={item.name}
        lastName={item.lastName}
        status={item.status}
        photos={item.photos.small}
        subscription={item.followed}
        followingInProgress={props.followingInProgress}
        follow={props.subscribeToUser}
        unfollow={props.unsubscribeToUser}
        setUsers={props.setUsers}
    />);

    const callback = (id, phase, interactions) => {
        console.log(`${id}'s ${phase} phase and ${interactions} interactions`);
    }

    return (
        <Profiler id="UsersPage" onRender={callback}>
            <div className={classes.usersContainer}>
                <div className={classes.users}>
                    {usersArray}
                </div>
                <Profiler id="Paginator" onRender={callback}>
                    <Paginator numberOfUsers={props.pageCount}
                               pageSize={props.pageSize}
                               currentPage={props.currentPage}
                               getUsers={props.getUsers}
                    />
                </Profiler>
            </div>
        </Profiler>

    )
}

export default UsersProfile;