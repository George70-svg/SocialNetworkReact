import React from 'react';
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
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

    componentDidMount() {
        this.props.initialization()
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
                    <Route path="/dialogs" render={() => withSuspense(<DialogsWrapper/>)}/>
                    <Route path="/profile/:userId?" render={() => withSuspense(<ProfileWrapper/>)}/>
                    <Route path="/films" render={() => withSuspense(<FilmsWrapper/>)}/>
                    <Route path="/users" render={() => withSuspense(<UsersWrapper/>)}/>
                    <Route path="/setting" render={() => withSuspense(<SettingWrapper/>)}/>
                    <Route path="/login" render={() => <Login/>}/>
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

let AppContainer =  compose(
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