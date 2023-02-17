import { NavLink } from "react-router-dom";
import s from './DialogUsers.module.css'

const setActive = ({isActive}) => isActive ? s.activeUser : undefined;

function DialogUsers(props) {
    return ( 
        <>
            <ul className={s.items}>
                <li><NavLink to={`/dialogs/${props.id}`} className={setActive}>{props.name}</NavLink></li>
            </ul>
        </>
     );
}

export default DialogUsers;