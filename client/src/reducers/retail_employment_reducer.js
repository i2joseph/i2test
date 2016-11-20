import { RETAIL_EMPLOYMENT } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETAIL_EMPLOYMENT : return {
      ...state,
      retailEmployment: action.payload
    }
    default:
      return state;
  }
}
