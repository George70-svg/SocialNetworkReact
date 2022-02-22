import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.css"
import {LoginForm} from "../../common/LoginContainer/LoginContainer";
import {login, logout} from "../../redux/authReducer";
import {getAuthStatus} from "../../redux/selectors/authSelector";

class LoginClass extends React.Component {
    state = {
        isAuth: this.props.isAuth
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.isAuth !== this.props.isAuth) {
            this.setState({
                isAuth: this.props.isAuth
            })
        }
    }

    onSubmit = (formData, setStatus) => {
        if (this.props.isAuth) {
            this.props.logout()
        } else if (!this.props.isAuth) {
            this.props.login(formData, setStatus)
        }
    }

    render() {

        if(this.props.isAuth) {
            return <Redirect to="/profile"/>
        }

        return (
            <div className={classes.login}>
                <h2>Login</h2>
                <LoginForm onSubmit={this.onSubmit} isAuth={this.state.isAuth}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: getAuthStatus(state),
})

const actionCreators = {
    login,
    logout,
}

export default compose(
    connect(mapStateToProps, actionCreators)
)(LoginClass)
