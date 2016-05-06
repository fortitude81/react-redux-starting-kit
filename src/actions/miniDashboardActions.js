import * as CONST from '../constants';

export const displayWelcomeCard = (welcomeMsg) => ({
  type: CONST.DISPLAY_WELCOME_CARD,
  payload: welcomeMsg
});

export const displayCards = (cards) => ({
  type: CONST.DISPLAY_CARDS,
  payload: cards
});