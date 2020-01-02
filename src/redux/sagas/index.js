/*
 * @Author: tanjun 
 * @Date: 2020-01-02 11:59:11 
 * @Last Modified by: tanjun
 * @Last Modified time: 2020-01-02 13:53:22
 */

import {
  REDUX_DATA_SAGA,
  REDUX_DATA_ASYNC,
} from '@/redux/actions/index'
import { put, takeEvery, delay } from 'redux-saga/effects'

function* reducerAsync() {
  try{
    yield delay(1000);
    yield put({ type: REDUX_DATA_ASYNC })
  }catch{
    console.error('saga执行错误');
  }
}

export function* watchReducerAsync() {
  yield takeEvery(REDUX_DATA_SAGA, reducerAsync)
}