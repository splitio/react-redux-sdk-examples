import React from 'react';
import { connect } from 'react-redux';
import { mapTreatmentToProps, mapIsFeatureOnToProps } from '@splitsoftware/splitio-redux';
import { featureName } from '../sdkConfig';

/**
 * This example shows `mapTreatmentToProps` and `mapIsFeatureOnToProps` functions.
 * With them, we define a custom `mapStateToProps` function used to extract different
 * pieces of data from the store: the `counter` value, Split tratments and its `isReady` status.
 */

function ExtractSplitData({ counter, isReady, feature, isFeatureOn }) {
  return (
    <div>
      <p>{isReady ? 'SDK is ready' : 'SDK is not ready'}</p>
      <p>{`${featureName} is ${feature}`}</p>
      <p>{`is ${featureName} 'on' ? ${isFeatureOn}`}</p>
      <p>{counter}</p>
    </div>
  )
}

// The following function returns an object with the following format:
// { isFeatureOn: true|false }
const mapTestSplitToProps = mapTreatmentToProps(featureName);

// The following function returns an object with the following format:
// { feature: '<treatment value>' }
const mapIsTestSplitToProps = mapIsFeatureOnToProps(featureName);

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    isReady: state.splitio.isReady,

    ...mapTestSplitToProps(state),
    ...mapIsTestSplitToProps(state),
  }
}

export default connect(mapStateToProps)(ExtractSplitData);
