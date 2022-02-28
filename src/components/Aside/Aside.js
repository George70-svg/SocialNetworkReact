import classes from "./Aside.module.css";
import {NavLink} from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList";

const Aside = (props) => {
    return (
        <aside className={classes.aside}>
            <NavLink to="/profile" activeClassName={classes.active}>
                <div>Profile</div>
            </NavLink>
            <NavLink to="/dialogs" activeClassName={classes.active}>
                <div>Messages</div>
            </NavLink>
            <NavLink to="/films" activeClassName={classes.active}>
                <div>Films</div>
            </NavLink>
            <NavLink to="/users" activeClassName={classes.active}>
                <div>Users</div>
            </NavLink>
            <NavLink to="/setting" activeClassName={classes.active}>
                <div>Setting</div>
            </NavLink>
            <div className={classes.fiendsList}>
                <FriendsList friendsList={props.friendsList}/>
            </div>
        </aside>
    )
}

export default Aside;