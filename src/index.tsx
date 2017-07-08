import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Router from './router/index';
import MainReducer from './reducers';

import '../assets/main.scss';

const store = createStore(MainReducer);


ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
  document.getElementById('main')
);

/**
 * This is required for webpack hot reloading
 */
// if (module.hot) {
//     module.hot.accept();
// }
