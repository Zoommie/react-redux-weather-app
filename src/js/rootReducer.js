import { combineReducers } from 'redux';
import searchReducer from './components/searchEntry/searchReducer';

const rootReducer = combineReducers({
  search: searchReducer
});

export default rootReducer;
