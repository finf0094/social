import React from 'react';
import { sendMessageActionCreator, updateMessageInputActionCreator } from '../../state/dialogsReducer';
import DialogUsers from './Dialog-users/DialogUsers';
import s from './dialogs.module.css'
import Messages from './Messages/Messages';



const Dialogs = (props) => {
    const messageElement = React.createRef();
    const updateSendMessageValueInput = () => {
        const text = messageElement.current.value;
        props.dispatch(updateMessageInputActionCreator(text))
    }
    const sendMessage = (e) => {
        e.preventDefault();
        props.dispatch(sendMessageActionCreator())
    }
    const messages = props.dialogsPage.messages.map((message, i) => <Messages message={message.message} key={i}/>)
    const dialogUsers = props.dialogsPage.dialogs.map((dialog, i) => <DialogUsers name={dialog.name} id={dialog.id} key={i}/>)
    return (
        <div className={s.content}>
            <div className="DialogUsers">
                { dialogUsers }
            </div>

            <div className={s.messages}>
                { messages }
                <form className={s.sendMessage}>
                    <input className={s.sendMessageInput}
                            onChange={updateSendMessageValueInput}
                            ref={messageElement}
                            type="text" value={props.dialogsPage.sendMessageValue} 
                            placeholder="Напишите сообщение"/>
                    <button onClick={sendMessage} className={s.sendMessageBtn}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Dialogs;