import React from 'react';
import {connect} from 'react-redux';

import * as welcomeMsgActions from '../actions/welcomeMsgActions';

import App from '../components/App.jsx';

const mapStateToProps = (state) => {
  return {
    welcomeMsg: state.welcomeMsg
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onDecrease: (id) => dispatch(widgetListActions.decreaseWidgetValue(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
