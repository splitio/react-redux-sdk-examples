import { 
  SPLIT_FEATURE_READ, 
  SPLIT_READY 
} from  '../constants/features'

const initialState = {
  ready: false,
  /**
   * This map is going to be empty on it's default state, so no flags.
   * It's definitely valid to assign a different default state.
   */
  features: {}
};

/**
 * 
 * @param {Object} state - The current state associated with this reducer
 * @param {Object} params - The action params, including the type.
 */
function featuresReducer(state = initialState, { type, treatments }) {
  switch (type) {
    case SPLIT_READY:
      return {
        ...state,
        ready: true
      };
    case SPLIT_FEATURE_READ:
      return {
        ...state,
        features: treatments
      };
    default:
      return state;
  }
} 

export default featuresReducer;