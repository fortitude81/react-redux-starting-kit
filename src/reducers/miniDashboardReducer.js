import * as CONST from '../constants';

const miniDashboardReducer = (state = [], action) => {
  switch (action.type) {
    case CONST.RETRIEVE_MINIDASHBOARD_ENTRIES:
      return action.data.slice();

    default:
      return state;

  }
}

export default miniDashboardReducer;
