import * as CONST from '../constants';

const welcomeMsgReducer = (state = {}, action) => {
  switch (action.type) {
    case CONST.DISPLAY_WELCOME_MSG:
      return Object.assign({}, {
        title: action.title,
        msg: action.msg
      });

    default:
        return state;
  }
};

export default welcomeMsgReducer;
