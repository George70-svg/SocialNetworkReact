import React from 'react';
import classes from "./ProfileStatus.module.css";

export class ProfileStatusClass extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    activatedStatusMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivatedStatusMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
    }

    render() {
        return (
            <div className={classes.statusContainer}>
                {!this.state.editMode &&
                <div onDoubleClick={this.activatedStatusMode} className={classes.statusText}>
                    <p>{this.props.status}</p>
                </div>
                }
                {this.state.editMode &&
                <div className={classes.statusCreator}>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivatedStatusMode} type="text" value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}