import React, {useEffect, useState} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.css"
import {LoginForm} from "../../common/LoginForm/LoginForm";
import {login, logout, getCaptchaUrl} from "../../redux/authReducer";
import {getAuthStatus, getCaptchaUrlSelector} from "../../redux/selectors/authSelector";

const Login = (props) => {
    let [isAuth, setAuth] = useState(props.isAuth)

    useEffect(() => {
        setAuth(props.isAuth)
    }, [props.isAuth])

    if(isAuth) {
        return <Redirect to="/profile"/>
    }

    const onSubmit = (formData, setError) => {
        if (props.isAuth) {
            props.logout()
        } else if (!props.isAuth) {
            props.login(formData, setError)
        }
    }

    return (
        <div className={classes.login}>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmit} isAuth={isAuth} captchaURL={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: getAuthStatus(state),
    captchaUrl: getCaptchaUrlSelector(state),
})

const actionCreators = {
    login,
    logout,
}

export default compose(
    connect(mapStateToProps, actionCreators)
)(Login)
