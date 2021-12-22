import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

const appReducer = combineReducers({
  counter: counterReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
