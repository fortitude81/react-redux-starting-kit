import * as CONST from '../constants';

const miniDashboardReducer = (state = [], {type, payload}) => {
  switch (type) {
    case CONST.RETRIEVE_MINIDASHBOARD_ENTRIES:
      return [...state, ...payload];

    default:
      return state;

  }
}

export default miniDashboardReducer;
