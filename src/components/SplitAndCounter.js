import React from 'react'
import { connect } from 'react-redux';
import { mapTreatmentToProps, mapIsFeatureOnToProps } from '@splitsoftware/splitio-redux'

/**
 * This example showcasts `mapTreatmentToProps` and `mapIsFeatureOnToProps` functions.
 */

function SplitAndCounter({ counter, isReady, feature, isFeatureOn }) {
  return (
    <div>
      <p>{isReady ? 'SDK is ready' : 'SDK is not ready'}</p>
      <p>{`test_split is ${feature}`}</p>
      <p>{`is test_split 'on' ? ${isFeatureOn}`}</p>
      <p>{counter}</p>
    </div>
  )
}

const mapTestSplitToProps = mapTreatmentToProps('test_split');
const mapIsTestSplitToProps = mapIsFeatureOnToProps('test_split');

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    isReady: state.splitio.isReady,
    ...mapTestSplitToProps(state),
    ...mapIsTestSplitToProps(state),
  }
}

export default connect(mapStateToProps)(SplitAndCounter);
