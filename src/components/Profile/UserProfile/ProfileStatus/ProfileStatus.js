import React, {useState, useEffect} from 'react';
import classes from "./ProfileStatus.module.css";

export const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activatedStatusMode = () => {
        setEditMode(true)
    }

    const deactivatedStatusMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value)
    }

    return (
        <div className={classes.statusContainer}>
            {!editMode &&
            <div onDoubleClick={activatedStatusMode} className={classes.statusText}>
                <p>Статус: {status}</p>
            </div>
            }
            {editMode &&
            <div className={classes.statusCreator}>
                <input onChange={onStatusChange} onBlur={deactivatedStatusMode} autoFocus={true} type="text" value={status}/>
            </div>
            }
        </div>
    )
}