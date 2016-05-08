import * as CONST from '../constants';
import initialState from '../initialState';

const cardListReducer = (state = initialState.cardList, {type, payload}) => {
  switch (type) {
    case CONST.DISPLAY_CARD_LIST:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default cardListReducer;
