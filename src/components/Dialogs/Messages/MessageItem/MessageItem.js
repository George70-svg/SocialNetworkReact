import classes from "./MessageItem.module.css";

const MessageItem = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar} src={props.userAvatar} alt="avatar"/>
            <div className={classes.messageInfoContainer}>
                <div className={classes.messageInfo}>
                    <div className={classes.userName}>{props.userName}</div>
                    <div className={classes.userDate}>
                        {props.messageDate}
                    </div>
                </div>
                <div className={classes.messageText}>{props.messageText}</div>
            </div>

        </div>
    )
}

export default MessageItem;