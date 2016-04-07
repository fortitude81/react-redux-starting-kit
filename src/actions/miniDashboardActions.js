import * as CONST from '../constants';

const entries = [
  {title: 'Foo', msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.'},
  {title: 'Bar', msg: 'Etiam pretium a elit in varius. Ut vel est accumsan, interdum erat sit amet, lacinia risus.'}
];

export const loadEntries = () => {
  return {
    type: CONST.RETRIEVE_MINIDASHBOARD_ENTRIES,
    entries: entries
  };
};
