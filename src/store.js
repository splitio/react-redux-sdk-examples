import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let store = null;

export function getStore() {
  return store;
}

function configureStore() {
  const storeInstance = createStore(
   rootReducer,
    applyMiddleware(thunk)
  );

  store = storeInstance;
  return storeInstance;
 }


export default configureStore;