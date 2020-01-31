import React from 'react';
import { connectToggler } from '@splitsoftware/splitio-redux';
import { feature_name } from '../sdkConfig';

/**
 * This example shows `connectToggler` connector.
 */

const ComponentOn = () => {
  return <div>ON</div>;
}

const ComponentDefault = () => {
  return <div>OFF</div>;
}

/* This component renders ComponentOn if `feature_name` value is 'on', and ComponentDefault otherwise */
export default connectToggler(feature_name)(ComponentOn, ComponentDefault);
