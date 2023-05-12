/**
 * If you're looking for how to test with Split SDK, you can use the localhost (offline) mode of the SDK (see https://help.split.io/hc/en-us/articles/360038851551-Redux-SDK#localhost-mode)
 * which is what we're doing here.
 *
 * It is not recommended to use the default (online) mode of the SDK in your tests because that will slow them down and increase their flakiness due to network latencies.
 */

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from '../components/App';
import setupStore from '../stores';

const config = {
  core: {
    authorizationKey: 'localhost',
    key: 'some_key',
  },
  features: {
    'test_feature_flag': 'on', // example with just a string value for the treatment
    'test_feature_flag-off': { treatment: 'off', config: '{ "color": "blue" }' }, //example of a defined config
  }
};

describe('App', () => {
  test('renders the correct treatment', async () => {
    const store = setupStore(config, 'test_feature_flag');

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // On the initial rendered output, the SDK is not ready. So treatment values are control.
    expect(screen.getByText('SDK is not ready')).toBeInTheDocument();
    expect(screen.getByText('Feature flag test_feature_flag is control')).toBeInTheDocument();

    // In localhost mode, the SDK is ready on next event-loop tick and the component re-rendered with the mocked treatment.
    // So we use `findByText` to wait for the component to update.
    expect(await screen.findByText('SDK is ready')).toBeInTheDocument();
    expect(await screen.findByText('Feature flag test_feature_flag is on')).toBeInTheDocument();
  });
});
