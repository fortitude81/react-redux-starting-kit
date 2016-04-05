import * as CONST from '../constants';
import initialState from '../initialState';

const welcomeMsgReducer = (state = initialState.welcomeMsg, action) => {
  switch (action.type) {
    case CONST.DISPLAY_WELCOME_MSG:
      return Object.assign({}, state);

    default:
        return state;
  }
};

export default welcomeMsgReducer;
