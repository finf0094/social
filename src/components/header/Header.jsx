import './header.css'
function Header(props) {
    return ( 
        <header className="header">
            <img src="https://vk.com/images/logos/vklogo_400.png" alt="logo" srcset="" />
            
            {props.isAuth ? <h3>{props.login}</h3> : <h2>Login</h2>}
        </header>
     );
}

export default Header;