import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../state/authReducer';
import Header from './Header';
import './header.css'

class HeaderContainer extends Component {

    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(res => {
                if (res.data.resultCode === 0) {
                    const {id, email, login} = res.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }
    

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.userAuthData.isAuth,
    login: state.auth.userAuthData.login
})



export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);