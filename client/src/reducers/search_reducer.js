import { COMPANY_LIST, COUNTRY_LIST, SECTOR_LIST} from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPANY_LIST: return {
      ...state,
      company: action.payload
    };

    case COUNTRY_LIST: return {
      ...state,
      country: action.payload
    };

    case SECTOR_LIST: return {
      ...state,
      sector: action.payload
    }

    default:
      return state;
  }
}
