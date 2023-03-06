import { Component } from "react";
import { connect } from "react-redux";
import { follow, setPage, unfollow, toggleFetchingFollow, getUsers, onChangeUsersPage } from "../../state/usersReducer";
import Users from "./Users";


class UsersAPIContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.countPage, this.props.currentPage)
    }

    onChangeUsers = (p) => {
        this.props.onChangeUsersPage(this.props.countPage, p)
    }

    
    render() {
        return <Users countUsers={this.props.countUsers}
                      users={this.props.users}
                      countPage={this.props.countPage}
                      currentPage={this.props.currentPage}
                      onChangeUsers={this.onChangeUsers}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      toggleFetchingFollow={this.props.toggleFetchingFollow}
                      /> 
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countUsers: state.usersPage.countUsers,
        countPage: state.usersPage.countPage,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             return dispatch(followAC(userID))
//         },
//         unFollow: (userID) => {
//             return dispatch(unFollowAC(userID))
//         },
//         setUsers: (users) => {
//             return dispatch(setUsersAC(users))
//         },
//         setPage: (page) => {
//             return dispatch(setPageAC(page))
//         },
//         setCountUsers: (countUsers) => {
//             return dispatch(setCountUsersAC(countUsers))
//         },
//         toggleIsFetching: (isFetching) => {
//             return dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// };

const UsersContainer = connect(mapStateToProps, {
    follow,
    setPage,
    toggleFetchingFollow,
    unfollow,
    getUsers,
    onChangeUsersPage
})(UsersAPIContainer);

export default UsersContainer;