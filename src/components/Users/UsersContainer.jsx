import { connect } from "react-redux";
import { followAC, setCountUsersAC, setPageAC, setUsersAC, unFollowAC } from "../../state/usersReducer";
import UsersC from "./Users";
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countUsers: state.usersPage.countUsers,
        countPage: state.usersPage.countPage,
        currentPage: state.usersPage.currentPage
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
        setUsers: (users) => {
            return dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            return dispatch(setPageAC(page))
        },
        setCountUsers: (countUsers) => {
            return dispatch(setCountUsersAC(countUsers))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;