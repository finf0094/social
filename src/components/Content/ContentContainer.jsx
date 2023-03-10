import { Component } from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { setProfileAC, addPostActionCreator, updatePostValueInputActionCreator, setProfile, setProfileStatus, updateProfileStatus } from '../../state/profileReducer';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ContentContainer extends Component {
    
    componentDidMount() {
        if (!this.props.param.userId) {
            this.props.param.userId = 28241;
        }
        this.props.setProfile(this.props.param.userId)
        this.props.setProfileStatus(this.props.param.userId)
    }
    
    render() {
        if (!this.props.isAuth) return <Navigate to='/login'/>
        return (
            <>
                <Content {...this.props} profile={this.props.profile} status={this.props.status} updateProfileStatus={this.props.updateProfileStatus}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
const TakeParams = (props) => {
    return <ContentContainer {...props} param={useParams()} />
}
export default compose(
    connect(mapStateToProps, {setProfileAC,addPostActionCreator,updatePostValueInputActionCreator,setProfile, setProfileStatus, updateProfileStatus}),
    withAuthRedirect
)(TakeParams)