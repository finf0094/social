import { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../../state/authReducer';
import Header from './Header';
import './header.css'
class HeaderContainer extends Component {
    
    componentDidMount() {
        this.props.setAuthUser()
    }
    

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.userAuthData.isAuth,
    login: state.auth.userAuthData.login
})



export default connect(mapStateToProps, {setAuthUser})(HeaderContainer);