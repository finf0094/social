import {combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
});

const store = createStore(reducers);

export default store;