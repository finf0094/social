import { NavLink } from 'react-router-dom';
import s from './header.css'
function Header(props) {
    return ( 
        <header className="header">
            <img src="https://vk.com/images/logos/vklogo_400.png" alt="logo" srcset="" />
            
            {props.isAuth ? <h3>{props.login}</h3> : <NavLink className={s.login} to='/login'>Login</NavLink>}
        </header>
     );
}

export default Header;