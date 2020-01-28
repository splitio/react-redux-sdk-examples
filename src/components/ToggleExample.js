import React from 'react';
import { connectToggler } from '@splitsoftware/splitio-redux'

/**
 * This example showcasts `connectToggler` connector.
 */

const ComponentOn = () => {
  return <div>ON</div>;
}

const ComponentDefault = () => {
  return <div>OFF</div>;
}

/* This component renders ComponentOn if 'test_split' value is 'on', and ComponentDefault otherwise */
export default connectToggler('test_split')(ComponentOn, ComponentDefault);
