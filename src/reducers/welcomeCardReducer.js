import * as CONST from '../constants';

export default (state = {}, {type, payload}) => {
  switch (type) {
    case CONST.DISPLAY_WELCOME_CARD:
      return Object.assign({}, state, payload);

    default:
      return state;
  }
};
