import React from 'react';
import {connect} from 'react-redux';

import MiniDashboard from '../components/MiniDashboard.jsx';

const mapStateToProps = (state) => {
  return {
    entries: state.miniDashboard
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onEvent: (id) => dispatch(action.someAction(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniDashboard);
