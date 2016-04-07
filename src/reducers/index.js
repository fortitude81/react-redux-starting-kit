import {combineReducers} from 'redux';

// custom reducers
import welcomeMsg from '../reducers/welcomeMsgReducer';
import miniDashboard from '../reducers/miniDashboardReducer';

const rootReducer = combineReducers({
  welcomeMsg,
  miniDashboard
});

export default rootReducer;
