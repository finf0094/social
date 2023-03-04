import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { setProfileAC, addPostActionCreator, updatePostValueInputActionCreator } from '../../state/profileReducer';
import { useParams } from 'react-router-dom';


class ContentContainer extends React.Component {
    
    componentDidMount() {
        if (!this.props.param.userId) {
            this.props.param.userId = 28241;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.param.userId}`).then(res => this.props.setProfileAC(res.data))
    }

    
    render() {
        return (
            <>
                <Content {...this.props} profile={this.props.profile}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const TakeParams = (props) => {
    return <ContentContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps, {
    setProfileAC,
    addPostActionCreator,
    updatePostValueInputActionCreator
})(TakeParams);