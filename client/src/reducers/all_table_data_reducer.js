import { ALL_TABLE_DATA } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_TABLE_DATA : return {
      ...state,
      allTableData: action.payload
    }
    default:
      return state;
  }
}
