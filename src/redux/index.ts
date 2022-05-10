import { combineReducers } from 'redux';
import { searchProjects } from './searchProjects/reducers';
import { factorialHistory } from './factorial/reducers';

const allReducers = combineReducers({
  searchProjects: searchProjects,
  factorialHistory: factorialHistory
})

export default allReducers;