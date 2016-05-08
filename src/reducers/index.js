import {combineReducers} from 'redux';

// import all custom reducers here
// example
// import example from '../reducers/exampleReducer';

// combine reducers here, comma separated
// example
// const rootReducer = combineReducers({ example });
import welcomeCard from '../reducers/welcomeCardReducer';
import cardList from '../reducers/cardListReducer';

const rootReducer = combineReducers({ 
  welcomeCard,
  cardList
});

export default rootReducer;
