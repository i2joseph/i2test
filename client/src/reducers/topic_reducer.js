import { TOPICS } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  // console.log("ALL TOPICS: ", action.payload)
  switch (action.type) {
    case TOPICS : return {
      ...state,
      allTopics: action.payload
    }
    default:
      return state;
  }
}
