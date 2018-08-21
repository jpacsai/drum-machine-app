import { combineReducers } from 'redux';
import clickReducer from './clickReducer';
import styleReducer from './styleReducer';

export default combineReducers({
    clicked: clickReducer,
    style: styleReducer
})