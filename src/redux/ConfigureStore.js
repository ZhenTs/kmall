import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './PromiseMiddleware';
import common from './common/CommonReducer';

const rootReducer = combineReducers({
  common,
});

const createStoreWithMiddleware = applyMiddleware(thunk, promiseMiddleware)(
  createStore,
);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
