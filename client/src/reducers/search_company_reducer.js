import { SEARCH_COMPANY } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_COMPANY : return {
      ...state,
      searchCompany: action.payload
    }
    default:
      return state;
  }
}
