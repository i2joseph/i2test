import { ALL_TOPICS } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_TOPICS : return {
      ...state,
      allTopics: action.payload
    }
    default:
      return state;
  }
}
