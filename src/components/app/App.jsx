import Navigation from '../Navigation/Navigation'

import UsersContainer from '../Users/UsersContainer'
import ContentContainer from '../Content/ContentContainer'
import DialogsContainer from '../Dialogs/DialogsContainer'

import './app.css'
import { Route, Routes } from 'react-router-dom'
import HeaderContainer from '../header/HeaderContainer'



const App = (props) => {
    return (
        <div className='App'>
            <HeaderContainer className="header" />
            <Navigation className="nav" />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer dialogsPage={props.store.dialogsPage} dispatch={props.dispatch} />} />
                    <Route path="/profile/:userId?" element={<ContentContainer profilePage={props.store.profilePage} dispatch={props.dispatch}/>} />
                    <Route path="/users" element={<UsersContainer/>} />
                </Routes>
            </div>
        </div>
    )
}

export default App