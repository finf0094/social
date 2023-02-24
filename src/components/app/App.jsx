import Header from '../header/Header'
import Navigation from '../Navigation/Navigation'
import Content from '../Content/Content'

import './app.css'
import Dialogs from '../Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom'


const App = (props) => {
    return (
        <div className='App'>
            <Header className="header" />
            <Navigation className="nav" />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.store.dialogsPage} dispatch={props.dispatch} />} />
                    <Route path="/profile" element={<Content profilePage={props.store.profilePage} dispatch={props.dispatch}/>} />
                </Routes>
            </div>
        </div>
    )
}

export default App