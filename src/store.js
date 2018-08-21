import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let store = null;

/**
 * Configures the redux store and keeps a reference.
 */
function configureStore() {
  const storeInstance = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  store = storeInstance;
  return storeInstance;
}

function getStore() {
  return store;
}

configureStore();

export default getStore;
