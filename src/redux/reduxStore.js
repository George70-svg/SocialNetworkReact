import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import friendsReducer from "./friendsReducer";
import dialogsReducer from "./dialogsReducer";
import filmReducer from "./filmReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import {appReducer} from "./appReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    filmPage: filmReducer,
    usersPage: usersReducer,
    friends: friendsReducer,
    auth: authReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;