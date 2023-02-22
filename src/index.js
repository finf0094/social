import './index.css';
import store from './state/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index'
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
          <App state={store.getState()} addPost={store.addPost.bind(store)} updatePostValueInput={store.updatePostValueInput.bind(store)}/>
        </BrowserRouter>
      );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)


