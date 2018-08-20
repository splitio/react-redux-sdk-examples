import { 
  SPLIT_FEATURE_READ, 
  SPLIT_READY 
} from  '../constants/features'
import { getStore } from '../store';
import { splitClient } from '../Split'; 

splitClient.on(splitClient.Event.SDK_READY, () => {
  getStore().dispatch(notifyReady());
});

splitClient.on(splitClient.Event.SDK_UPDATE, () => {
  getStore().dispatch(readTreatments());
});

function notifyReady() {
  return dispatch => {
    dispatch({
      type: SPLIT_READY
    });
    dispatch(readTreatments())
  };
}

function readTreatments() {
  return (dispatch, getState) => {
    const splitNames = ['add_remove_key', 'advanced_editor'];
    const treatments = splitClient.getTreatments(splitNames);

    dispatch({ 
      type: SPLIT_FEATURE_READ,
      treatments
    });
  };
}