import { createStore, applyMiddleware } from 'redux';
import AppReducer from '../redux/reducer';
import initialState from '../assets/initialState.json';
import createSagaMiddleware from 'redux-saga';
import root from '../sagas/sagas';
const sagaMiddleware = createSagaMiddleware();


const store = createStore(AppReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(root);

export default store;