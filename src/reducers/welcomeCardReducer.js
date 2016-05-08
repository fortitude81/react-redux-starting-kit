import * as CONST from '../constants';
import initialState from '../initialState';

const welcomeCardReducer = (state = initialState.welcomeCard, {type, payload}) => {
  switch (type) {
    case CONST.DISPLAY_WELCOME_CARD:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};

export default welcomeCardReducer;
