import React from 'react';
import { connectToggler } from '@splitsoftware/splitio-redux';
import { featureFlagName } from '../sdkConfig';

/**
 * This example shows `connectToggler` connector.
 */

const ComponentOn = () => {
  return <div>ON</div>;
}

const ComponentDefault = () => {
  return <div>OFF</div>;
}

/* This component renders ComponentOn if `featureFlagName` treatment is 'on', and ComponentDefault otherwise */
export default connectToggler(featureFlagName)(ComponentOn, ComponentDefault);
