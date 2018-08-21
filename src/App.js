import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { map } from 'lodash';

class App extends Component {
  static propTypes = {
    ready: PropTypes.bool.isRequired,
    features: PropTypes.object.isRequired
  };

  render() {
    const {
      ready, features
    } = this.props;

    /**
     * This is a possible way to block rendering of your app until the SDK is ready. You could also
     * play with the timeout setting here. Getting a timeout event DOES NOT mean that the SDK will never 
     * be ready. 
     * Keeping that in mind, you could mix those two to only delay rendering by a limited amount of time
     * (the ready timeout setting). 
     * More info on our docs: https://docs.split.io/docs/javascript-sdk-overview#section-advanced-subscribe-to-events-and-changes
     */
    if (!ready) return null;

    const featuresCollection = map(features, (treatment, featureName) => (<div>
      <div>feature: {featureName}</div>
      <div>treatment: {treatment}</div>
      <br/>
    </div>));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Redux SDK example</h1>
        </header>
        <p className="App-intro">
          This example only renders some flags on the screen, but has example logic on how to
          handle your flags on a React + Redux stack. Take a look at the source code for more guidance.
        </p>
        <p className="App-intro">
          You can also go to the Split UI, make a change that'll match your test with a different treatment and watch the flag update!
        </p>
        <p className="App-intro">
          <header> Your Features: </header>
          <br />
          {featuresCollection}
        </p>
      </div>
    );
  }
}

function mapStateToProps({
  features: { ready, features }
}) {
  return {
    features,
    ready
  };
}

export default connect(mapStateToProps)(App);
