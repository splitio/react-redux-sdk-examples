import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './Split';
import './actions/features';
import configureStore from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
   <App />
  </Provider>,
  document.getElementById('root')
 );
registerServiceWorker();
