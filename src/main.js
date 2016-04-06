// misc
import 'file?name=[name].[ext]!./index.html';
import 'babel-polyfill';
import 'fastclick';
import 'font-awesome-sass-loader';
import 'material-design-lite';
import './scss/main.scss';

// linbraries and tools
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

// store
import store from './stores';

// components
import AppContainer from './containers/AppContainer.jsx';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
