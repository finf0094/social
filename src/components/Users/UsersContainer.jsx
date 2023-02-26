import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../state/usersReducer";
import Users from "./Users";
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            return dispatch(followAC(userID))
        },
        unFollow: (userID) => {
            return dispatch(unFollowAC(userID))
        },
        setUser: (users) => {
            return dispatch(setUsersAC(users))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;