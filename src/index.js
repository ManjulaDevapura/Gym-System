import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from "react-router-dom";

// import { rootReducer } from './client/store/reducer';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";
import i18n from "./client/language/i18n";

import App from './client/App';
import * as serviceWorker from './client/serviceWorker';
import { store } from '../src/client/store/store';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "./client/css/sb-admin.css";
import './client/css/custom.css';

import 'bootstrap';
import './client/js/sb-admin.js';

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <I18nextProvider i18n={i18n}>
                    <App />
                </I18nextProvider>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

store.subscribe(() => {
    console.log('store changed', store.getState());
})
