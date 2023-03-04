import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { follow, setCountUsers, setPage, setUsers, unFollow,toggleIsFetching } from "../../state/usersReducer";
import Users from "./Users";


class UsersAPIContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}`, {
            withCredentials: true
        })
                .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setCountUsers(response.data.totalCount >= 200 ? 200 : response.data.totalCount)
                })
    }
    onChangeUsers = (p) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.countPage}`, {
            withCredentials: true
        })
                .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
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
                      /> 
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countUsers: state.usersPage.countUsers,
        countPage: state.usersPage.countPage,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
    toggleIsFetching
})(UsersAPIContainer);

export default UsersContainer;