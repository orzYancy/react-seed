import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import rootReducer from './redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    rootReducer,
    // https://github.com/zalmoxisus/redux-devtools-extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
