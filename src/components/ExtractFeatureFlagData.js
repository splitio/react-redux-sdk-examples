import React from 'react';
import { connect } from 'react-redux';
import { mapTreatmentToProps, mapIsFeatureOnToProps } from '@splitsoftware/splitio-redux';
import { featureFlagName } from '../sdkConfig';

/**
 * This example shows `mapTreatmentToProps` and `mapIsFeatureOnToProps` functions.
 * With them, we define a custom `mapStateToProps` function used to extract different
 * pieces of data from the store: the `counter` value, `feature` flag treatment and its `isReady` status.
 */

function ExtractFeatureFlagData({ counter, isReady, feature, isFeatureOn }) {
  return (
    <div>
      <p>{isReady ? 'SDK is ready' : 'SDK is not ready'}</p>
      <p>{`Feature flag ${featureFlagName} is ${feature}`}</p>
      <p>{`is ${featureFlagName} 'on' ? ${isFeatureOn}`}</p>
      <p>{counter}</p>
    </div>
  )
}

// The following function returns an object with the following format:
// { isFeatureOn: true|false }
const mapTestSplitToProps = mapTreatmentToProps(featureFlagName);

// The following function returns an object with the following format:
// { feature: '<treatment value>' }
const mapIsTestSplitToProps = mapIsFeatureOnToProps(featureFlagName);

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    isReady: state.splitio.isReady,

    ...mapTestSplitToProps(state),
    ...mapIsTestSplitToProps(state),
  }
}

export default connect(mapStateToProps)(ExtractFeatureFlagData);
