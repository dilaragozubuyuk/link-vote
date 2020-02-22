import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './redux/store/store'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
