import * as CONST from '../constants';

const miniDashboardReducer = (state = [], action) => {
  switch (action.type) {
    case CONST.RETRIEVE_MINIDASHBOARD_ENTRIES:
      return Object.assign({}, action.entries);

    default:
        return state;
  }
};

export default miniDashboardReducer;
