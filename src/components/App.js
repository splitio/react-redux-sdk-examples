import React from 'react';
import logo from '../logo.svg';
import ListOfFeatures from './ListOfFeatures';
import ToggleExample from './ToggleExample';
import ExtractFeatureFlagData from './ExtractFeatureFlagData';

export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Splitio-Redux SDK example</h1>
        <a
          className='App-link'
          href='https://www.split.io/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Split.io
        </a>
      </header>
      <div className='App-intro'>
        This example showcases some of Splitio-Redux features.
        Take a look at the source code for more guidance.
      </div>
      <div className='App-intro'>
        Change the SDK config at <i>sdkConfig.js</i> and watch the list of feature flags updated.
      </div>
      {/* Example of component using connectSplit HOC */}
      <div className='App-section' >
        <h3 className='Section-header' ><i>connectSplit</i> example</h3>
        <ListOfFeatures />
      </div>
      {/* Example of component using connectToggler HOC */}
      <div className='App-section' >
        <h3 className='Section-header' ><i>connectToggler</i> example</h3>
        <ToggleExample />
      </div>
      {/* Example of component using mapStateToProps to extract feature flags and other data from the store */}
      <div className='App-section' >
        <h3 className='Section-header' ><i>mapStateToProps</i> example</h3>
        <ExtractFeatureFlagData />
      </div>
    </div>
  );
};
