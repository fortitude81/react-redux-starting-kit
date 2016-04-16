import * as CONST from '../constants';

export const retrieveEntries = (data) => {
  return {
    type: CONST.RETRIEVE_MINIDASHBOARD_ENTRIES,
    data: data
  };
};
