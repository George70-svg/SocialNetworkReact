import React from 'react';
import {BrowserRouter, HashRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import './App.css';
import AsideWrapper from './components/Aside/AsideWrapper'
import Preloader from "./common/Preloader/preloader";
import HeaderWrapper from "./components/Header/HeaderWrapper";
import Login from "./components/Login/Login";
import {initialization} from "./redux/appReducer";
import {getInitialized} from "./redux/selectors/appSelector";
import store from "./redux/reduxStore";
import withSuspense from "./common/HOC/withSuspense";
const DialogsWrapper = React.lazy(() => import('./components/Dialogs/DialogsWrapper'));
const ProfileWrapper = React.lazy(() => import('./components/Profile/ProfileWrapper'));
const FilmsWrapper = React.lazy(() => import('./components/Films/FilmsWrapper'));
const UsersWrapper = React.lazy(() => import('./components/Users/UsersWrapper'));
const SettingWrapper = React.lazy(() => import('./components/Setting/SettingWrapper'));

class App extends React.Component {

    /*catchAllErrors = (promiseRejectionEvent) => {
        alert("Внимание: Необработанная ошибка Promise. Позор мне! Причина: " + promiseRejectionEvent.reason);
        console.log("Необработанная ошибка Promise." + promiseRejectionEvent);
    }*/

    componentDidMount() {
        this.props.initialization()
        window.addEventListener("unhandledrejection", this.catchAllErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader className="app-preloader"/>
        }

        return (
            <div className="app-wrapper">
                <HeaderWrapper/>
                <AsideWrapper/>
                <div className="main">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
                        <Route path="/dialogs" render={() => withSuspense(<DialogsWrapper/>)}/>
                        <Route path="/profile/:userId?" render={() => withSuspense(<ProfileWrapper/>)}/>
                        <Route path="/films" render={() => withSuspense(<FilmsWrapper/>)}/>
                        <Route path="/users" render={() => withSuspense(<UsersWrapper/>)}/>
                        <Route path="/setting" render={() => withSuspense(<SettingWrapper/>)}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: getInitialized(state),
})

const actionCreators = {
    initialization
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, actionCreators)
)(App)

const SocialNetworkApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <React.StrictMode>
                    <AppContainer/>
                </React.StrictMode>
            </Provider>
        </HashRouter>
    )
}

export default SocialNetworkApp