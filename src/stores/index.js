import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { splitReducer, initSplitSdk, getTreatments } from '@splitsoftware/splitio-redux';

import counterReducer from '../reducers/counter';

/** Init Redux Store */
export default function setupStore(sdkConfig, featureFlagName) {
  // By using Redux Toolkit we don't need to explicitly specify `window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__`
  // as the store enhancers, or apply `thunk` middleware, as they are included by default.
  const store = configureStore({
    reducer: combineReducers({
      splitio: splitReducer,
      counter: counterReducer
    }),
  });

  /** Dispatch `initSplitSdk` to init Split SDK */
  store.dispatch(initSplitSdk({ config: sdkConfig })).then(() => {
    console.log('SDK initialized');
  });

  /**
   * Dispatch a `getTreatments` action to evaluate the given feature flags and
   * update their treatment values at the store once the SDK is ready. `evalOnUpdate`
   * flag is set in order to re-evaluated feature flags if their definitions are updated.
   */
  store.dispatch(getTreatments({ splitNames: [featureFlagName], evalOnUpdate: true }));

  return store;
}
