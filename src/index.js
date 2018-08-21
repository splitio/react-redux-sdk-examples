import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './Split';
import './actions/features';
import getStore from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={getStore()}>
   <App />
  </Provider>,
  document.getElementById('root')
 );
registerServiceWorker();
