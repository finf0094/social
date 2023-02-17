import Header from '../header/Header'
import Navigation from '../Navigation/Navigation'
import Content from '../Content/Content'

import './app.css'
import Dialogs from '../Dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header className="header" />
                <Navigation className="nav" />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs />} />
                        <Route path="/profile" element={<Content />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App