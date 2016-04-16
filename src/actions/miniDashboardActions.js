import * as CONST from '../constants';

export const retrieveEntries = (entries) => {
  return {
    type: CONST.RETRIEVE_MINIDASHBOARD_ENTRIES,
    payload: entries
  };
};
