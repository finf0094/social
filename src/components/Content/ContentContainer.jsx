import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { setProfileAC, addPostActionCreator, updatePostValueInputActionCreator, setProfile } from '../../state/profileReducer';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


class ContentContainer extends React.Component {
    
    componentDidMount() {
        if (!this.props.param.userId) {
            this.props.param.userId = 28241;
        }
        this.props.setProfile(this.props.param.userId)
    }

    
    render() {
        if (!this.props.isAuth) return <Navigate to='/login'/>
        return (
            <>
                <Content {...this.props} profile={this.props.profile}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.userAuthData.isAuth
})

const TakeParams = (props) => {
    return <ContentContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps, {
    setProfileAC,
    addPostActionCreator,
    updatePostValueInputActionCreator,
    setProfile
})(TakeParams);