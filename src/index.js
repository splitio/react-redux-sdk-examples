import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';

import setupStore from './stores';
import { config, featureFlagName } from './sdkConfig';

const store = setupStore(config, featureFlagName);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
