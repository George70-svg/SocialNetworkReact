import classes from './Dialogs.module.css';
import DialogsContainer from "./DialogContainer/DialogsContainer";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogsContainer}>
            <div className={classes.dialogs}>
                <DialogsContainer dialogsData={props.dialogsPage.dialogsDate}/>
            </div>
            <div className={classes.messeges}>
                <Messages messagesData={props.dialogsPage.messagesData}
                          addMessage={props.addMessage}
                />
            </div>
        </div>
    )
}

export default Dialogs;