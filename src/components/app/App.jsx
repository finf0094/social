import Header from '../header/Header'
import Navigation from '../Navigation/Navigation'
import Content from '../Content/Content'

import './app.css'

const App = () => {
    return (
        <div className='App'>
            <Header className="header"/>
            <Navigation className="nav"/>
            <Content className="content"/>
        </div>
    )
}

export default App