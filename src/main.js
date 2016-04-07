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

// actions
import * as welcomeMsgActions from './actions/welcomeMsgActions';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);

// TEST DATA
const entries = [
  {title: 'Foo', msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.'},
  {title: 'Bar', msg: 'Etiam pretium a elit in varius. Ut vel est accumsan, interdum erat sit amet, lacinia risus.'}
];

const welcomeMsg = {
  title: 'Welcome to the Starter Kit',
  msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.',
};

setTimeout(() => {
    store.dispatch(welcomeMsgActions.displayWelcomeMsg(welcomeMsg.title, welcomeMsg.msg));
});
