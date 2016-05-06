import * as CONST from '../constants';

export default (state = [], {type, payload}) => {
  switch (type) {
    case CONST.DISPLAY_CARDS:
      return [...state, ...payload];

    default:
      return state;
  }
};
