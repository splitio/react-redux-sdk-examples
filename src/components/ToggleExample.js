import React from 'react';
import { connectToggler } from '@splitsoftware/splitio-redux';
import { featureName } from '../sdkConfig';

/**
 * This example shows `connectToggler` connector.
 */

const ComponentOn = () => {
  return <div>ON</div>;
}

const ComponentDefault = () => {
  return <div>OFF</div>;
}

/* This component renders ComponentOn if `featureName` value is 'on', and ComponentDefault otherwise */
export default connectToggler(featureName)(ComponentOn, ComponentDefault);
