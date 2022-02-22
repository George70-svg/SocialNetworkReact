import classes from './DialogsContainer.module.css';
import DialogItem from "./DialogItems/DialogItem";

const DialogsContainer = (props) => {
    //key={index} create for solution react-error
    let dialogsArray = props.dialogsData
        .map((item, index) => <DialogItem key={index} dialogName={item.name} id={item.id} avatar={item.avatar}/>)

    return (
        <div className={classes.dialogs}>
            {dialogsArray}
        </div>
    )
}

export default DialogsContainer;