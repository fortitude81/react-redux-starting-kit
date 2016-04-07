import * as CONST from '../constants';
import initialState from '../initialState';

export const displayWelcomeMsg = () => {
  return {
    type: CONST.DISPLAY_WELCOME_MSG,
    welcomeMsg: initialState.welcomeMsg
  };
};
