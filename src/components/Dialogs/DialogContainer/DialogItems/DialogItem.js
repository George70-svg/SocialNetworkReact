import {NavLink} from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <NavLink to={path} className={`${classes.dialog}`}>
            <img className={classes.avatar} src={props.avatar} alt="avatar"/>
            <div className={`${classes.dialogName}`}>{props.dialogName}</div>
        </NavLink>
    )
}


export default DialogItem;