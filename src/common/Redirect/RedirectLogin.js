import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthStatus} from "../../redux/selectors/authSelector";

export const withLoginRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to="/login"/>

            return <Component {...this.state}/>
        }
    }

    const mapStateToProps = (state) => {
        return ({
            isAuth: getAuthStatus(state)
        })
    }

    return connect(mapStateToProps)(RedirectComponent)
}