import React from 'react'
import { connectSplit, selectTreatmentValue, getSplitNames } from '@splitsoftware/splitio-redux'

/**
 * This example shows `connectSplit` connector.
 *
 * The following components print a list of feature flags with their corresponting
 * treatment values (flags). The list of feature flags is obteined with `getSplitNames` function,
 * and treatment values are accessed from the state with `selectTreatmentValue` selector.
 * While the SDK is not ready, it prints a simple loading message.
 */

function FeatureItem({ featureFlagName, treatmentValue }) {
  return (
    <div>
      <h4>{`Feature flag: ${featureFlagName}`}</h4>
      <p>{`Treatment value: ${treatmentValue}`}</p>
    </div>
  )
}

function ListOfFeatures(props) {
  const { splitio } = props;
  const featureFlagNames = getSplitNames();

  return (
    /* We print the list of feature flags once the SDK is ready. */
    splitio.isReady ?
      <div>{
        featureFlagNames.map(featureFlagName =>
          <FeatureItem key={featureFlagName}
            featureFlagName={featureFlagName}
            treatmentValue={selectTreatmentValue(splitio, featureFlagName)}
          />)
      }</div> :
      <p>Loading Split SDK ...</p>
  )
}

export default connectSplit()(ListOfFeatures);
