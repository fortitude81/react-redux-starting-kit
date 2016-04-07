import React from 'react';
import {connect} from 'react-redux';

import * as welcomeMsgActions from '../actions/welcomeMsgActions';

import WelcomeMsg from '../components/WelcomeMsg.jsx';

const mapStateToProps = (state) => {
  return {
    title: state.welcomeMsg.title,
    msg: state.welcomeMsg.msg
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onEvent: (id) => dispatch(action.someAction(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMsg);
