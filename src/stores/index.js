import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { splitReducer, initSplitSdk, getTreatments } from '@splitsoftware/splitio-redux';

import counterReducer from '../reducers/counter';

/** Init Redux Store */
export default function setupStore(sdkConfig, featureName) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({
      splitio: splitReducer,
      /**
       * You'll have your app reducers here too.
       * As an example we include a vanilla counter reducer, which is given as basic example
       * in the Redux documentation (https://redux.js.org/introduction/examples#counter-vanilla)
       */
      counter: counterReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  /** Dispatch `initSplitSdk` to init Split SDK */
  store.dispatch(initSplitSdk({ config: sdkConfig })).then(() => {
    console.log('SDK initialized');
  });

  /**
   * Dispatch a `getTreatments` action to evaluate the given split names and
   * update their treatment values at the store once the SDK is ready. `evalOnUpdate`
   * flag is set in order to re-evaluated splits if their definitions are updated.
   */
  store.dispatch(getTreatments({ splitNames: [featureName], evalOnUpdate: true }));

  return store;
}
