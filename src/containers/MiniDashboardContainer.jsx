import React from 'react';
import {connect} from 'react-redux';

import MiniDashboard from '../components/MiniDashboard.jsx';

const mapStateToProps = (state) => {
  return {
    entries: state.miniDashboard
  };
};

export default connect(mapStateToProps)(MiniDashboard);
