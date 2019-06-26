
import initialState from './initialState.json';
import AppReducer from '../reducer';
import {createStore} from 'redux';

const store = createStore(AppReducer, initialState);
export default store;
