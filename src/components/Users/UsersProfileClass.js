import React from 'react';
import classes from "./Users.module.css"
import UserItem from "./UserItem/UserItem";
import Preloader from "../../common/Preloader/preloader";

class UsersProfile extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setUsersPage(pageNumber) {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        if(this.props.toggleIsFetching) {
            return (
                <div className={classes.preloader}>
                    <Preloader/>
                </div>
            )
        }

        let pagesCount = Math.ceil(this.props.pageCount / this.props.pageSize)
        let usersPageArray = []

        for(let i = 1; i <= pagesCount; i++) {
            usersPageArray.push(i)
        }

        usersPageArray = usersPageArray.map(page => {
                return <li key={page}
                           className={page === this.props.currentPage ? classes.active : classes.unactive}
                           onClick={() => {this.setUsersPage(page)}}
                >{page}</li>
            })

        let usersArray = this.props.users.map((item) => <UserItem
            key={item.id}
            userId={item.id}
            name={item.name}
            lastName={item.lastName}
            status={item.status}
            photos={item.photos.small}
            subscription={item.followed}
            followingInProgress={this.props.followingInProgress}
            follow={this.props.subscribeToUser}
            unfollow={this.props.unsubscribeToUser}
            setUsers={this.props.setUsers}
        />);

        return (
            <div className={classes.usersContainer}>
                {usersArray}
                <ul>
                    {usersPageArray}
                </ul>
            </div>
        )
    }
}

export default UsersProfile;