/*
 * @Author: tanjun 
 * @Date: 2020-01-02 11:18:45 
 * @Last Modified by: tanjun
 * @Last Modified time: 2020-01-02 13:54:42
 */

import { createStore, applyMiddleware } from 'redux';
import actionReducer from '@/redux/reducers/index';
import createSagaMiddleware from 'redux-saga';
import { watchReducerAsync } from '@/redux/sagas/index';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(actionReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchReducerAsync)
export default store;