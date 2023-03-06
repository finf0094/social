import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;