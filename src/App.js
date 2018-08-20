import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { map } from 'lodash';

class App extends Component {
  render() {

    const {
      ready, features
    } = this.props;

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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <header> My Features: </header>
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
