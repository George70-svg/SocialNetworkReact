import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

const Header = (props) => {
    return(
        <header className={classes.header}>
            <h1>IAKE social network</h1>
            <div className={classes.loginContainer}>
                {props.data.isAuth
                    ?   <div className={classes.logout}>
                            <p>{props.data.login}</p>
                            <button onClick={props.logout}>logout</button>
                        </div>
                    : <NavLink to="/login">Login</NavLink>
                    }
            </div>
        </header>
    )
}

const actionCreators = {
    logout
}

export default connect(null, actionCreators)(Header);