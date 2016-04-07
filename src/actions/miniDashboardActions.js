import * as CONST from '../constants';

export const loadEntries = (data) => {
  return {
    type: CONST.RETRIEVE_MINIDASHBOARD_ENTRIES,
    entries: data
  };
};
