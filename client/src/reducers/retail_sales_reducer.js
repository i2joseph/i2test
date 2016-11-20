import { RETAIL_SALES } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETAIL_SALES : return {
      ...state,
      retailSales: action.payload
    }
    default:
      return state;
  }
}
