import DialogUsers from './Dialog-users/DialogUsers';
import s from './dialogs.module.css'
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className="DialogUsers">
                <DialogUsers name='Askhat' id='1'/>
                <DialogUsers name='Kulush' id='2'/>
                <DialogUsers name='Mako' id='3'/>
                <DialogUsers name='Aset' id='4'/>
            </div>
            <div className={s.messages}>
                <Messages message='how are you!'/>
                <Messages message='Hi'/>
                <Messages message='Nessss'/>
            </div>
        </div>
    )
}

export default Dialogs;