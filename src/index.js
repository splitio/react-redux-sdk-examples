import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { splitReducer, getSplitNames } from '@splitsoftware/splitio-redux'
import { splitSaga, initSplitSdk, getTreatments } from './sagas/splitSaga'

import './index.css';
import sdkConfig from './sdkConfig';
import App from './components/App';
import counterReducer from './reducers/counter';

/** Init Redux Store */
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    splitio: splitReducer,
    /* You'll have your app reducers here too.
     * As an example we include a vanilla counter reducer, which is given as basic example
     * in the Redux documentation (https://redux.js.org/introduction/examples#counter-vanilla)
     */
    counter: counterReducer
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Start splitSaga to handle `INIT_SPLIT_SDK` and `GET_TREATMENTS` actions.
// We must pass the store `dispatch` method as an argument for splitSaga.
sagaMiddleware.run(splitSaga, store.dispatch);

/** Dispatch `INIT_SPLIT_SDK` action to init Split SDK */
store.dispatch(initSplitSdk({
  config: sdkConfig,
  onReady: () => {
    console.log('SDK initialized');

    /** Once the SDK is ready, we dispatch a `GET_TREATMENTS` action with all Splits in our workspace */
    const splitNames = getSplitNames();
    store.dispatch(getTreatments({ splitNames }));
  }
}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
