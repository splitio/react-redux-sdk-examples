/**
 * Here we'll have the logic around fetching and storing SDK treatments. We could move more behaviour to the Split.js
 * file, even make a wrapper on top of the getTreatment/s calls, but that should not be necessary.
 * 
 * To modify the flags that are being evaluated, change those on the constants file (or stop using the constants)
 */
import {
  // Features to evaluate
  USER_FEATURES,
  ACCOUNT_FEATURES,
  // Actions
  SPLIT_FEATURE_READ, 
  SPLIT_READY 
} from  '../constants/features'
import getStore from '../store';
import { userClient, accountClient } from '../Split'; 

userClient.on(userClient.Event.SDK_READY, () => {
  const store = getStore();
  // SDK got ready, so notify that to update the flag.
  store.dispatch(notifyReady());
  // As the SDK is now ready, read the batch of treatments.
  store.dispatch(readTreatments())
});

userClient.on(userClient.Event.SDK_UPDATE, () => {
  const store = getStore();
  // When an update is made to a rollout plan or segment on Split console,
  // react to that change by reading your flags again, in case evaluations change.
  store.dispatch(readTreatments());
});

/**
 * Notifies that the Split SDK is ready and stores that flag.
 */
function notifyReady() {
  return dispatch => {
    dispatch({
      type: SPLIT_READY
    });
  };
}

/**
 * Reads the treatments using Split SDk and stores them on the Redux store.
 */
function readTreatments() {
  return (dispatch, getState) => {
    // We call the Split SDK to retrieve the flags.
    const userTreatments = userClient.getTreatments(USER_FEATURES);
    const accountTreatments = accountClient.getTreatments(ACCOUNT_FEATURES);

    // On this example we're handling the treatments as an entire map, but you
    // can do whatever you need with your flags.
    const treatments = {
      ...userTreatments, ...accountTreatments
    };

    dispatch({ 
      type: SPLIT_FEATURE_READ,
      treatments
    });
  };
}