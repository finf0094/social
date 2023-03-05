import { Component } from "react";
import { connect } from "react-redux";
import getUsers from "../../API/api";
import { follow, setCountUsers, setPage, setUsers, unFollow,toggleIsFetching, toggleFetchingFollow } from "../../state/usersReducer";
import Users from "./Users";


class UsersAPIContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.countPage, this.props.currentPage).then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setCountUsers(data.totalCount >= 200 ? 200 : data.totalCount)
                })
    }
    onChangeUsers = (p) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(p)
        getUsers(this.props.countPage, this.props.currentPage)
                .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                })
    }

    
    render() {
        return <Users countUsers={this.props.countUsers}
                      users={this.props.users}
                      countPage={this.props.countPage}
                      currentPage={this.props.currentPage}
                      onChangeUsers={this.onChangeUsers}
                      follow={this.props.follow}
                      unfollow={this.props.unFollow}
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
    unFollow,
    setUsers,
    setPage,
    setCountUsers,
    toggleIsFetching,
    toggleFetchingFollow
})(UsersAPIContainer);

export default UsersContainer;