import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import commonItemReducer from './commonItemReducer';

export default combineReducers({
    item: itemReducer,
    commonItem: commonItemReducer
});