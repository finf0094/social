import './index.css';
import store from './state/reduxState';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
          <Provider store={store}>
            <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>
          </Provider>
        </BrowserRouter>
      );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);