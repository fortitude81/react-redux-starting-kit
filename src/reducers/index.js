import {combineReducers} from 'redux';

// custom reducers
import welcomeMsg from '../reducers/welcomeMsgReducer';

const rootReducer = combineReducers({
  welcomeMsg
});

export default rootReducer;
