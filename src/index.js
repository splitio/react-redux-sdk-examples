import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { splitReducer, initSplitSdk, getTreatments, getSplitNames } from '@splitsoftware/splitio-redux'

import './index.css';
import sdkConfig from './sdkConfig';
import App from './components/App';
import counterReducer from './reducers/counter';

/** Init Redux Store */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    splitio: splitReducer,
    /* You'll have your app reducers here too. 
     * As an example, we include a vanilla counter reducer
     */
    counter: counterReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

/** Dispatch `initSplitSdk` to init Split SDK */
store.dispatch(initSplitSdk({ config: sdkConfig })).then(() => {
  console.log('SDK initialized');

  /** Once the SDK is ready, we dispatch a `getTreatments` action with all Splits in our workspace */
  const splitNames = getSplitNames();
  store.dispatch(getTreatments({ splitNames }));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
