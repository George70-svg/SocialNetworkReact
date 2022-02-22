import classes from './Messages.module.css';
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import {useFormik} from "formik";

const Messages = (props) => {
    //key={index} create for solution react-error
    let messagesArray = props.messagesData
        .map((item, index) => <MessageItem
            key={index}
            messageText={item.text}
            userAvatar={item.avatar}
            userName = {item.userName}
            messageDate = {item.messageDate}
        />)

    return (
        <div className={classes.messagesContainer}>
            <div className={classes.messages}>
                {messagesArray}
            </div>
            <DialogsForm addMessage={props.addMessage} />
        </div>
    )
}

const DialogsForm = (props) => {
    const formik = useFormik({
        initialValues: {
            message: "",
        },

        onSubmit: (values, submitProps) => {
            props.addMessage(values.message)
            submitProps.resetForm()
        }
    })

    return(
        <div className={classes.newMessage}>
            <form onSubmit={formik.handleSubmit}>
                <textarea name="message"
                       id="message"
                       placeholder="Enter your message..."
                       onChange={formik.handleChange}
                       value={formik.values.message}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Messages;