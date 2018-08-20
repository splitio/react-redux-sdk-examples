import { 
  SPLIT_FEATURE_READ, 
  SPLIT_READY 
} from  '../constants/features'

const initialState = {
  ready: false,
  features: {

  }
};

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