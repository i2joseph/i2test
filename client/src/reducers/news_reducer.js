import { CURRENT_NEWS } from '../actions/index';
import { NEWS_COUNTER } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  // console.log("INSIDE CURRENT NEWS: ", action.payload)
  switch (action.type) {
    case CURRENT_NEWS: return {
      ...state,
      currentNews: action.payload
    };

    case NEWS_COUNTER: return {
      ...state,
      newsCounter: action.payload
    };

    default:
      return state;
  }
}
