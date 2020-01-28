import React from 'react'
import { connectSplit, selectTreatmentValue, getSplitNames } from '@splitsoftware/splitio-redux'

/**
 * This example showcasts `connectSplit` connector.
 * 
 * The following components print a list of splits (features) with their corresponting
 * treatment values (flags). The list of splits is obteined with `getSplitNames` function,
 * and treatment values are accessed from the state with `selectTreatmentValue` selector.
 * While the SDK is not ready, it prints a simple loading message.
 */

function SplitItem({ splitName, treatmentValue }) {
  return (
    <div>
      <h4>{`Split: ${splitName}`}</h4>
      <p>{`Treatment value: ${treatmentValue}`}</p>
    </div>
  )
}

function ListOfSplits(props) {
  const { splitio } = props;
  const splitNames = getSplitNames();

  return (
    /* We print the list of Splits once the SDK is ready. */
    splitio.isReady ?
      <div>{
        splitNames.map(splitName =>
          <SplitItem key={splitName}
            splitName={splitName}
            treatmentValue={selectTreatmentValue(splitio, splitName)}
          />)
      }</div> :
      <p>Loading Split SDK ...</p>
  )
}

export default connectSplit()(ListOfSplits);
