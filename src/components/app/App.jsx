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
                    <Route path="/dialogs/*" element={<Dialogs state={props.state} />} />
                    <Route path="/profile" element={<Content state={props.state} addPost={props.addPost} updatePostValueInput={props.updatePostValueInput} />} />
                </Routes>
            </div>
        </div>
    )
}

export default App