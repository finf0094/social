import Header from '../header/Header'
import Navigation from '../Navigation/Navigation'
import Content from '../Content/Content'

import './app.css'
import DialogsContainer from '../Dialogs/DialogsContainer'
import { Route, Routes } from 'react-router-dom'
import UsersContainer from '../Users/UsersContainer'


const App = (props) => {
    return (
        <div className='App'>
            <Header className="header" />
            <Navigation className="nav" />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer dialogsPage={props.store.dialogsPage} dispatch={props.dispatch} />} />
                    <Route path="/profile" element={<Content profilePage={props.store.profilePage} dispatch={props.dispatch}/>} />
                    <Route path="/users" element={<UsersContainer/>} />
                </Routes>
            </div>
        </div>
    )
}

export default App