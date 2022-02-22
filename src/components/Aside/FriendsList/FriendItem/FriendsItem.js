import classes from "./FriendsItem.module.css";

const FriendsItem = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar} src={props.avatar} alt="avatar"/>
            <p className={classes.name}>{props.name}</p>
        </div>
    )

}

export default FriendsItem