import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Root from './components/root';
import configureStore from './store/store';

debugger
let store;
if (window.currentUser) {
  const preloadedState = {session: {currentUser: window.currentUser}};
  store = configureStore(preloadedState);
} else {
  store = configureStore();
}

window.store = store;

const root = document.getElementById('root');

ReactDOM.render(<Root store={store} />, root);

registerServiceWorker();
