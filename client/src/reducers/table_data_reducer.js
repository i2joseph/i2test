import { TABLE_DATA } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE_DATA : return {
      ...state,
      tableData: action.payload
    }
    default:
      return state;
  }
}
