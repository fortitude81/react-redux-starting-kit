import * as CONST from '../constants';

const welcomeMsgReducer = (state = '', action) => {
  switch (action.type) {
    case CONST.DISPLAY_WELCOME_MSG:
      return Object.assign({}, state.welcomeMsg);

    default:
        return state;
  }
};

export default welcomeMsgReducer;
