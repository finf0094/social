import s from './messages.module.css'

function Messages(props) {
    return ( 
        <div>
            <ul className={s.messages}>
                <li className={s.message}>{props.message}</li>
            </ul>
        </div>
     );
}

export default Messages;