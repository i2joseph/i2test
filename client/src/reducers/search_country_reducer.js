import { SEARCH_COUNTRY } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_COUNTRY : return {
      ...state,
      searchCountry: action.payload
    }
    default:
      return state;
  }
}
