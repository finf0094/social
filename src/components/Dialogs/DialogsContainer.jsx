import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageActionCreator, updateMessageInputActionCreator } from '../../state/dialogsReducer';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        messageValue: state.dialogsPage.sendMessageValue,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageInputValue:(text) => dispatch(updateMessageInputActionCreator(text)),
        sendMessage:() => dispatch(sendMessageActionCreator())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);