import { COMPANIES } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPANIES : return {
      ...state,
      companies: action.payload
    }
    default:
      return state;
  }
}
