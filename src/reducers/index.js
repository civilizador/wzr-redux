import {combineReducers} from 'redux';
import locReducer from './locReducer.js';

export default combineReducers({
    weather:locReducer
})
     
