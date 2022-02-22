import {connect} from "react-redux";
import classes from "./FriendsList.module.css";
import FriendsItem from "./FriendItem/FriendsItem";
import {getPageCount} from "../../../redux/selectors/usersSelector";

const FriendsList = (props) => {

    let friendsArray = props.friendsList
        .map((item, index) => <FriendsItem key={index} avatar={item.avatar} name={item.name}/>)

    return(
        <div className={classes.friendsContainer}>
            <h2 className={classes.headerText}>Friends</h2>
            <p className={classes.usersCount}>Users: {props.totalUsersCount}</p>
            <div className={classes.avatar}>
                {friendsArray}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        totalUsersCount: getPageCount(state)
    })
}

const actionCreators = {

}

export default connect(mapStateToProps, actionCreators)(FriendsList)