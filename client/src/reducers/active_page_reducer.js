import { ACTIVE_PAGE } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVE_PAGE : return {
      ...state,
      activePage: action.payload
    }
    default:
      return state;
  }
}
