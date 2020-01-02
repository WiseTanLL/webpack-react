/*
 * @Author: tanjun 
 * @Date: 2020-01-02 11:15:57 
 * @Last Modified by: tanjun
 * @Last Modified time: 2020-01-02 13:54:12
 */
import {
  REDUX_DATA_SYNCH,
  REDUX_DATA_ASYNC,
} from '@/redux/actions/index';

// 默认state
const initialState = {
  number: 0
};

const actionReducer = (state = initialState, action) => {
  switch(action.type) {
    case REDUX_DATA_SYNCH: {
      state.number += 1
      return { ...state }
      break
    };
    case REDUX_DATA_ASYNC: {
      state.number += 1
      return { ...state }
      break
    };
    default: return state;
  }
};
export default actionReducer;