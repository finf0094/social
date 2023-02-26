import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageInputActionCreator } from '../../state/dialogsReducer';
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;