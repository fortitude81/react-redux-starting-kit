import * as CONST from '../constants';

export const displayWelcomeMsg = (title, msg) => {
  return {
    type: CONST.DISPLAY_WELCOME_MSG,
    title: title,
    msg: msg
  };
};
