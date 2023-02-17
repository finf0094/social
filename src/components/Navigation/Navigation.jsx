import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const setActive = ({isActive}) => isActive ? s.activeLink : undefined;
function Navigation() {
    return ( 
        <div className={s.nav}>
            <ul>
                <li className={s.item}><NavLink to='/profile' className={setActive}>Profile</NavLink></li>
                <li className={s.item}><NavLink to='/dialogs' className={setActive}>dialogs</NavLink></li>
                <li className={s.item}>News</li>
                <li className={s.item}>Music</li>
            </ul>
        </div>
     );
}

export default Navigation;