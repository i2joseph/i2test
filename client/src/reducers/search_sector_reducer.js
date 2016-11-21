import { SEARCH_SECTOR } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_SECTOR : return {
      ...state,
      searchSector: action.payload
    }
    default:
      return state;
  }
}
